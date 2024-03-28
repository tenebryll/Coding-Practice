#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <getopt.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <sys/un.h>
#include <netdb.h>
#include <unistd.h>

/* Imports Custom function Library */
#ifndef FUNC_LIB
#define FUNC_LIB "func_lib.h"
#include FUNC_LIB
#endif

void help(){
        printf("%s\033[1m[Usage]:\033[0m\n\n",YELLOW);
        printf("%s(Example)\n./%s\b\b -i 127.0.0.1 -p 65000 -m hello\033[0m\n\n",YELLOW,__FILE__);
}

void error(char* msg){
        fprintf(stderr,"\033[1m%sERROR:%s\033[0m\n",RED,msg);
        help();
        abort();
}
int port, ip_version = 0, sock_fd, data, data2, type = 0;
char *ip_address, *msg;
int main(int argc, char **argv){
        int opt,index = 0;
        if(argc < 2){error("No Arguments\n");}
        while(1){
                static struct option options[] = {
                        {"help", no_argument, NULL, 'h'},
                        {"ip", required_argument, NULL, 'i'},
                        {"port", required_argument, NULL, 'p'},
                        {"msg", required_argument, NULL, 'm'},
                        {"client", no_argument, NULL, 'c'},
                        {"server", no_argument, NULL, 's'},
                        {NULL, 0, NULL, 0} /*NULL0NULL0 for end of options*/
                };
                opt = getopt_long (argc, argv, "i:p:m:cs", options, &index);
                if(opt == -1){break;}/*Breaks while loop when out of opts*/
                else{
                        switch(opt){
                                case 'h':
                                        help();
                                        break;
                                case 'i':
                                        ip_address = optarg;
                                        if(!isIpv4(ip_address)){error("Invalid IP Address\n");}
                                        ip_version = 4;
                                        break;
                                case 'p':
                                        port = atoi(optarg);
                                        if (!isPort(port)){
                                                error("Invalid Port Number(valid port range: 49152-65534)\n");
                                        }
                                        break;
                                case 'm':
                                        msg = optarg;
                                        break;
                                case 'c':
                                        type = 1;
                                        break;
                                case 's':
                                        type = 2;
                                        ip_version = 4;
                                        break;
                                case '?':
                                        error("Option error\n");
                                        break;
                                default:error("Something Weird Happened\n");
                        }
                }
        }
        printf("ip:%s\nport:%d\nmsg:%s\n",ip_address,port,msg);
        if(type == 1 && ip_address == 0){error("No IP Address provided\n");}
        if(ip_version == 0){error("Unknown IP Version Error\n");}
        if(msg == NULL){error("No Message provided\n");}
        if(type == 0){error("No Type Provided\n");}
        /* BSD Sockets*/
        if(ip_version == 4){
                if(type == 1){
                        printf("client\n");
                        struct sockaddr_in server_addr;
                        server_addr.sin_family = AF_INET;
                        server_addr.sin_port = htons(port);
                        server_addr.sin_addr.s_addr = inet_addr(ip_address);
                        
                        sock_fd = socket(AF_INET, SOCK_STREAM, 0);
                        if(sock_fd < 0){error("Socket Creation Failed\n");}

                        if(connect(sock_fd, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0){error("Connection Failed\n");}
                        printf("Connected to Server\n");
                        
                        data = send(sock_fd, msg, strlen(msg), 0);
                        if(data < 0){error("Send Failed\n");}
                        printf("Message Sent\n");
                        
                        data2 = recv(sock_fd, msg, strlen(msg), 0);
                        if(data2 < 0){error("Receive Failed\n");}
                        printf("Message: %i\n",data2);
                        
                        close(sock_fd);
                }
                if(type == 2){
                        printf("server\n");

                        if(system("hostname  -I")<0){error("Failed to get host address");};
                        struct sockaddr_in addr;
                        int addrlen = sizeof(addr);
                        addr.sin_family = AF_INET;
                        addr.sin_port = htons(port);
                        
                        sock_fd = socket(AF_INET, SOCK_STREAM, 0);
                        if(sock_fd < 0){error("Socket Creation Failed\n");}

                        if(bind(sock_fd, (struct sockaddr *)&addr, sizeof(addr)) < 0){error("Binding failed");}

                        if(listen(sock_fd, 5) < 0){error("Listening Failed\n");}
                        printf("Listening on port %d\n",port);

                        sock_fd = accept(sock_fd, (struct sockaddr *)&addr, (socklen_t*)&addrlen);
                        if(sock_fd < 0){error("Accepting Failed\n");}
                        printf("Connected to Client\n");
                        
                        data = recv(sock_fd, msg, strlen(msg), 0);
                        if(data < 0){error("Receive Failed\n");}
                        printf("Message: %s\n",msg);
                        
                        data2 = send(sock_fd, msg, strlen(msg), 0);
                        if(data2 < 0){error("Send Failed\n");}
                        printf("Message Sent\n");

                        close(sock_fd);
                }
        }
}
