#include<SoftwareSerial.h>

/* Create object named bt of the class SoftwareSerial */ 
SoftwareSerial bt(2,3); /* (Rx,Tx) */  
char c;
void setup() {
  bt.begin(9600); /* Define baud rate for software serial communication */
  Serial.begin(9600); /* Define baud rate for serial communication */
}

void loop() {
  
    if (bt.available()) /* If data is available on serial port */
    
     Serial.write(bt.read()); /* Print character received on to the serial monitor */
     Serial.print("j");
     if(Serial.available())
    
     bt.write(bt.read());

//bt.print(",");

//bt.print("1234.0");
    
}
