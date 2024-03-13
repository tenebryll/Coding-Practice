#include <stdio.h>
#include <stdlib.h>

int main(int argc, char** argv) {
	float fahrenheit, celsius;
	if(argc > 1){
		int step = strtol(argv[1],NULL,10), 
	  	    max = strtol(argv[2],NULL,10), 
	  	    min = 0;
		char* mode = argv[3];
		if(*mode == 'c'){
			fahrenheit = min;
			printf("Fahrenheit\t\tCelsius\n");
			while(fahrenheit <= max) {
				celsius = (5.0/9.0)*(fahrenheit-32.0);
				printf("\t%3.0f\t\t\t%6.1f\n", fahrenheit, celsius);
				fahrenheit += step;
			}
		} else if (*mode == 'f'){
			celsius = min;
			printf("Celsius\t\tFahrenheit\n");
			while(celsius <= max) {
				fahrenheit = ((9.0/5.0)*celsius)+32.0;
				printf("\t%3.0f\t\t\t%6.1f\n", celsius, fahrenheit);
				celsius += step;
			}
		}
		else{printf("No conversion specified\n");}
	
	}
	else{
		printf("(Invalid or Missing arguments)\n");
		printf("Usage: ./main <step> <max> <f or c>\n");
		printf("Example: ./main 20 300 f\n");
	}
	return 0;
}
