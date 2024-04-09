public class Dog extends Animal{
	private String furColor;
	public Dog(){super("doug"); furColor = "Black";}//No parameter Constructor
	public Dog(String name, String furColor){super(name);this.furColor = furColor;}//2 parameter Constructor
	public void speak(){System.out.println("woof");}
	public String getFurColor(){return furColor;}
	public String toString(){return "My dog's name is "+super.getName()+" and he has "+this.getFurColor()+" fur.";}
}
