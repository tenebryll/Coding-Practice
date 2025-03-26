/*This was just some practice code to mess around with c file opening and parsing functionality */
#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>
#include <string.h>

void parse_function(char *char_array, long size){
	int c = (int)size, end_brace=-1, start_brace=-1;
	/*index backwards(starts at EOF)  to parse most nested braces first*/
	while(c > 0){
		switch(char_array[c]){
			case('}'):end_brace=c;break;
			case('{'):if(start_brace == -1){start_brace=c;}break;
			default:break;
		}
		//putchar(char_array[c]);
		c--;
	}
	printf("start:%d:end:%d\n",start_brace,end_brace);
	//+1 and -1 to remove curly braces for better parsing
	for(int i = start_brace+1; i <= end_brace-1; ++i){
		putchar(char_array[i]);
	}
}

int main(void) {
/* GET FILE CONTENTS */
	/*Open file*/
	FILE *file;
	file = fopen("C-files/HelloWorld.c","r");
	/*Get file size for indexing*/
	fseek(file, 0L, SEEK_END);
	long file_size = ftell(file);
	rewind(file);
	/*Index through file and set contents to array*/
	char file_contents[file_size];
	int c, index = 0;
	while ((c = fgetc(file)) != EOF){
		file_contents[index] = (char)c;
		index += 1;
	}
	/*Close file*/
	fclose(file);
/**/
	parse_function(file_contents, file_size);
  	return 0;
}