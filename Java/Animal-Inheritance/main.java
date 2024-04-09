/**
@author Milo Thompson
@since 3/28/24
This program will create animal classes
*/
public class Main {
	public static void main(String[] args) {
		Dog clifford = new Dog("Clifford","Red");
		Pig wilbur = new Pig("Wilbur","pink");
		clifford.speak();
		wilbur.speak();
		clifford.getName();
		wilbur.getName();
		System.out.println(clifford.toString());
		System.out.println(wilbur.toString());
	}
}
