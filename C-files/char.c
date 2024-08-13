/*Get character input and print it to console. CTRL+C to end program*/
#include <stdio.h>
int main(void){
	int c = getchar();
	while(c != EOF){
		putchar(c);
		c = getchar();
	}
}
