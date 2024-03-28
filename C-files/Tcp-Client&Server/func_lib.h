#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <errno.h>
#define RED "\033[38;2;230;0;0m"
#define YELLOW "\033[38;2;200;200;0m"
#define GREEN "\033[38;2;0;150;0m"
#define BLUE "\033[38;2;0;0;200m"


int isIpv4(char *ip){
        int len = (int)strlen(ip);
        int charCnt = 0,octetCnt = 0;
        for(int i = 0; i < len; i++){
                if(ip[i] == '.'){
                        if(charCnt > 3 || charCnt == 0){return 0;}
                        charCnt = 0;
                        octetCnt++;
                }
                else{
                        if(ip[i] >= 48 && ip[i] <= 57){charCnt++;continue;}
                        else{return 0;}
                }
        }
        if(octetCnt != 3 || len < 7 || len > 15){return 0;}
        if(charCnt > 3 || charCnt == 0){return 0;}
        return 1;
}

int isPort(int port){
        if(port > 49151 && port < 65535){return 1;}
        return 0;
}

