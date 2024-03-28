/**
programmer:Milo Thompson
date:10/29/23
purpose: Simulate Trick Or Treating on Halloween. 
*/
import java.util.Random;
class Main {
  public static void main(String[] args) {

    //Declares Persons objects in array(5)
    Person[] persons = new Person[] {
      new Person(), //Default person
      new Person("Carl","superman",4,"Chocolate Bar"),
      new Person("Steve","Captain America",5,"Lollipop"),
      new Person ("Bob","Jack Sparrow",5,"Jaw Breaker"),
      new Person ("Alex","The Joker",6,"Skittles")
    };
    
    //Declares House objects in array(6)
    House[] houses = new House[] {
      new House(), //Default house
      new House("Carl","450 briar st","green",true,"Chocolate Egg",25),
      new House("Steve","123 long st","red",false,null,0),
      new House("Bob","456 long st","yellow",true,"Lollipop",20),
      new House("Sarah","789 briar st","blue",false,null,0),
      new House("Alex","789 hen st","blue",false,null,0)
    };
    
    //tester
    for(int x = 0; x < persons.length; x++){
      System.out.print(persons[x].getName() + " is dressed as " + persons[x].getCostume()+", has visited "+ persons[x].getHousesVisited()+" houses, ");
      for(int y =0; y < persons[x].getHousesVisited(); y++){
        Random rand = new Random();
        int n = rand.nextInt(houses.length);
        persons[x].trickOrtreat(houses[n]);
      }
      System.out.print("and has gotten "+persons[x].getPiecesOfCandy()+" pieces of candy!");
      System.out.println();System.out.println();
    }
  
  }
}
