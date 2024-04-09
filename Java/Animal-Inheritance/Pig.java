public class Pig extends Animal{
	private String skinColor;
	public Pig(){super("bob"); skinColor = "pink";}//No parameter Constructor
	public Pig(String name, String skinColor){super(name);this.skinColor = skinColor;}//2 parameter Constructor
	public void speak(){System.out.println("oink");}
	public String getSkinColor(){return skinColor;}
	public String toString(){return "My pig's name is "+super.getName()+" and he has "+this.getSkinColor()+" skin.";}
}
