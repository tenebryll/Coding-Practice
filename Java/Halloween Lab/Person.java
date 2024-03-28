import java.util.Random;
public class Person {
  //[Attributes]
  private String name; //Person's name.
  private String costume; //Costume of the Person.
  private int housesVisited;//Number of houses visited by Person
  private int piecesOfCandy; //How many pieces of candy Person has.
  private String favoriteCandy; //Person's favorite candy

  //[Constructors]
  //Full constructor
  public Person(String pName,String pCostume,int pHousesVisited,String pFavoriteCandy){
    name = pName;
    costume = pCostume;
    housesVisited = pHousesVisited;
    piecesOfCandy = 0;
    favoriteCandy = pFavoriteCandy;
  }
  //Default constuctor
  public Person(){
    name = "John";
    costume = "Batman";
    housesVisited = 4;
    piecesOfCandy = 0;
    favoriteCandy = "kitkat";
  }
  //[Methods]
  public void treat(House house){
    this.piecesOfCandy += house.getCandyGiven();
    if(this.getFavoriteCandy().equals(house.getTypeOfCandy())){
      System.out.print("got favorite candy at "+this.favoriteCandy+" at "+house.getAddress()+"!,");
    }
  }
    public void trick(House house){
      Random rand = new Random();
      int n = rand.nextInt(4);
      switch(n) {
        case 0:
          System.out.print("played a trick and placed fake spiders at "+ house.getAddress()+", ");
          break;
        case 1:
          System.out.print("played a trick and soaped the windows at "+ house.getAddress()+", ");
          break;
        case 2:
          System.out.print("played a trick and toilet papered the house at "+ house.getAddress()+", "); 
          break;
        case 3:
          System.out.print(" played a trick and left a spooky note at "+ house.getAddress()+", ");
      }
    }
  public void trickOrtreat(House house){
      if(house.getIsDecorated()){treat(house);} 
      else {trick(house);}
  }
  //[Getter Methods]
  public String getName(){return this.name;}//gets the name of person
  public String getCostume(){return this.costume;}//gets the costume of person
  public int getHousesVisited(){return this.housesVisited;}//gets the number of Houses visited
  public int getPiecesOfCandy(){return this.piecesOfCandy;}//gets the number candy obtained
  public String getFavoriteCandy(){return this.favoriteCandy;}//gets favorite candy
}
