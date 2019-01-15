/******************************************************************************
It is still a skeleton, I am not sure about the strings that the program receives from Mobile APP. 
*******************************************************************************/

#include <stdio.h>
#include <string.h>

struct Distance
{
   char motor[50];
   int motor_speed;
   char command[40];
};
Str_split()
{
	
	int init_size = strlen(str);
	char delim[] = ":";

	char *ptr = strtok(str, delim);
	printf("'%s'\n", ptr);
      dist.motor=ptr;
     	ptr = strtok(NULL, delim);
     dist.motor_speed=ptr;
	printf("%s\n",ptr);
     ptr = strtok(NULL, delim);
	printf("%s\n",ptr);
     dist.command=ptr;
 //return dist.motor, dist.motor_speed, dist.command
}

main()
{
strunt Distance dist;
Receiving_Random_string(str)
}

Receiving_Random_string(str)
{
//str[]="motor:speed:10"
Str_split();
}