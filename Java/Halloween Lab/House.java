public class House {
  //[Attributes]
  private String houseOwner; //Owner of the House
  private String address; //Address of the House.
  private String color; //Color of the House.
  private boolean isDecorated; //If the House is decorated or not.
  private String typeOfCandy; //The type of candy given
  private int candyGiven; //the amount of candy  given.

  //[Constructors]
  public House(String hHouseOwner,String hAddress,String hColor,boolean hIsDecorated,String hTypeOfCandy,int hCandyGiven){
    houseOwner = hHouseOwner;
    address = hAddress;
    color = hColor;
    isDecorated = hIsDecorated;
    typeOfCandy = hTypeOfCandy;
    candyGiven = hCandyGiven;
  }
  //Default constuctor
  public House(){
    houseOwner = "John";
    address = "123 Sesame st";
    color = "blue";
    isDecorated = true;
    typeOfCandy = "Skittles";
    candyGiven = 10;
  }
  //[Getter Methods]
  public String getHouseOwner(){return this.houseOwner;}//gets name of owner of House
  public String getAddress(){return this.address;}//gets address of House
  public String getColor(){return this.color;}//gets color of House
  public boolean getIsDecorated(){return this.isDecorated;}//gets if house is decorated
  public String getTypeOfCandy(){return this.typeOfCandy;}//gets type of candy at house
  public int getCandyGiven(){return this.candyGiven;}//gets the amount of candy given
}
