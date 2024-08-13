/*Using malloc to store chars*/
#include <stdio.h>
#include <stdlib.h>
int main(void){
	char* c = (char *)malloc(sizeof(char)*6);
	c[0] = 'H';
	c[1] = 'e';
	c[2] = 'l';
	c[3] = 'l';
	c[4] = 'o';
	c[5] = '\0';
	printf("%s",c);
	return 0;
}
