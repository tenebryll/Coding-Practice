/*
Programmer: Milo Thompson
Purpose: Calculate BMI based on input
Date: October 6, 2023
*/
import java.util.Scanner;
class BMICalculator {
  public static double bmi(double height, double weight){return (weight/(height*height))*703;}
  public static String weightClass(double height, double weight){
   double bmi = bmi(height,weight);
    String weightclass;
    if (bmi >= 30.0){weightclass = "Obese";} 
    else if(bmi >= 25.0 && bmi < 30.0){weightclass = "Overweight";}
    else if(bmi >= 18.5 && bmi < 25.0){weightclass = "Normal";} 
    else{weightclass = "Underweight";}
    return weightclass;
  }
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    System.out.println("What is your height in inches?");
    double height = input.nextDouble();
    System.out.println("What is your weight in pounds?");
    double weight = input.nextDouble();
    System.out.println("Height (in inches): "+height);
    System.out.println("Weight (in pounds): "+weight);
    System.out.println("BMI = "+bmi(height,weight));
    System.out.println(weightClass(height,weight));
  }
}
