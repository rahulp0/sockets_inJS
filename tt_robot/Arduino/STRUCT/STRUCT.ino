//Aim 
//TO control the servo and brushless motors using bluetooth 

//////////////////////////////////////////////////////////////////////////////


//Include all required libraries
// Include all the pins that are required for brushless motor and servo
//Example 
//Struct Servos{
//Servo motor_1, motor_2
//}
//for brushless 
//struct Brushless{

// int Motor_1=10
// int Motor_2=12
// int Motor_3=13
//}
//Select pins that are PWM

//Struct Servos{
//Servo motor_1,
  //int pin
//}

 


void setup() {
  // put your setup code here, to run once:
//select the baud rate
//Serial.Begin(9600)
//for both servo and brushless use .attach(pin) and also 
//use .write(speed) in case of brushless 
//use .write(angle){0-180} in case of servo 
}

void loop() {
  // put your main code here, to run repeatedly:
//call Individual functions
//Bluetooth_receive commands
//if ( Serial.available()>0)
//{
  //String action =Serial.readString();
  //Serial.println(action);
 //r=action;
 //if(r=="M1")
// {
  //brushless()
// }
   // if(r=="M2")
    //{
  //   brushless()
    //  
   // }
//}
if(r=="S1")
// {
  //servo()
// }
   // if(r=="S2")
    //{
  //   servo()
    //  
   // }
//}
}

void brushless()
{
 //motor_1.write(c)
 //motor_1.write(d) 
}

void servo()
{
 // for (int i=x; i>temp; i--)
     //         {
   //             motor_1.write(i);
         //       delay(30); 
         //change delays to increase or decrease speed
       //       }
  //for (int i=x; i>temp; i--)
    //          {
      //          myservoa.write(i);
       //        delay(30);
         //     }
}
