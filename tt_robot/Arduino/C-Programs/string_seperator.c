//program to seperate strings and print in c
#include <stdio.h>
#include <string.h>

int main()
{
	char str[] = "You can seperate anything";
	int init_size = strlen(str);
	char delim[] = " ";//character at which the strings has to be seperated

	char *ptr = strtok(str, delim);

	while (ptr != NULL)
	{
		printf("'%s'\n", ptr);
		ptr = strtok(NULL, delim);
	}

	return 0;
}
