#include<Servo.h>
Servo motor_1, motor_2;
int speed_1=10,speed_2=10;// values for the brushless motor. Vary from 58 to 100 to increase speed
int in1=8;//Pins of each motor
int in2=7;

void setup()
{
  Serial.begin(9600);
  motor_1.attach(9);
  motor_2.attach(10);
  motor_1.write(speed_1);
  motor_2.write(speed_2);
  delay(3000);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
   
}



void loop() {
  Brushless();
  //delay(100);

}
void Brushless()
{
 if(Serial.available()>0)
 {
   motor_1.write(speed_1);
   motor_2.write(speed_2);
   Serial.print("Enter Values between 58-100 for controling speed of motor");
   speed_1=Serial.parseInt();
   speed_1=speed_2;
   motor_1.write(speed_1);
   motor_2.write(speed_2);
   delay(40000);
   }

}
