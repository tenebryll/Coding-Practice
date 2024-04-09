/**
*Main.java
*@author: Milo Thompson
*@since: 2024-2-7
* Writing Static ArrayList methods
*/

import java.util.*;
public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> list = new ArrayList<Integer>();
    list.add(4);list.add(-1);list.add(-2);list.add(4);list.add(5);list.add(-2);
    
    ArrayList<String> list2 = new ArrayList<String>();
    list2.add("hi");list2.add("bye");list2.add("hello");list2.add("bye");

    System.out.println(smallest(list));
    System.out.println(longest(list2));
    remove(list,smallest(list));
    System.out.println(smallest(list));
     
  }
  public static int smallest(ArrayList<Integer> list){
     int smallest = list.get(0);
     for(int i : list){
             if(i < smallest){smallest = i;}
     }return smallest;
  }
  public static String longest(ArrayList<String> list){
        String largest = list.get(0);
        for(int i = 0; i < list.size(); i++){
                if(list.get(i).length() > largest.length()){largest = list.get(i);}
        }return largest;
  }
  public static void remove(ArrayList<Integer> list, int x){
        for(int i = 0; i < list.size(); i++){
                if(list.get(i) == x){list.remove(i);}
        }
  }
}
