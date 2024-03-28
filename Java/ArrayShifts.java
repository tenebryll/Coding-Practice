/** 
*Main.java
*@author: Milo Thompson
*@since: 2024-1-22
*Shifting Arrays with functions
*/
class ArrayShifts {
  public static boolean atLeastOneOdd(int[] array){
    for(int i = 0; i < array.length; i++){
      if(array[i] % 2 == 1){return true;}
    }return false;
  }
  public static int[] shiftRight(int[] array){
    int[] new_array= new int[array.length];
    for(int i = 0; i < array.length; i++){
      if(i == 0){new_array[i] = array[array.length - 1];}
      else{new_array[i] = array[i-1];}
    }return new_array;
  }
  public static int[] shiftLeft(int[] array){
    int[] new_array= new int[array.length];
    for(int i = 0; i < array.length; i++){
      if(i == array.length - 1){new_array[i] = array[0];}
      else{new_array[i] = array[i++];}
    }return new_array;
  }
  /*Replacement for Arrays.toString(al) 
  because it will not work for some reason. */
  public static void array_print(int[] array){
    for(int i = 0; i < array.length; i++){
     System.out.print(array[i]);if(i != array.length - 1){System.out.print(",");}
    }System.out.println();
  }
  public static void main(String[] args) {
    int[] al = {11,34,5,17,56};
    //Shift Right
    array_print(shiftRight(al));
    //Shift Left;
    array_print(shiftLeft(al));
    //Atleast one odd Number?
    System.out.println("Atleast on odd number:"+atLeastOneOdd(al));
  }
}
