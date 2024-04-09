public class Animal{
	private String name; //private instance variable
	public Animal(){name = "Doug";}//No parameter Constructor
	public Animal(String name){this.name = name;}//1 parameter Constructor
/*General Methods*/
	public String getName(){return this.name;}
	public void speak(){System.out.println("meow");}
}
