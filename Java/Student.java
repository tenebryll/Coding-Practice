/**
@author Milo Thompson
@since 4/11/24
This program will create student and gradstudent classes
*/
public class Student {
    private String name;
    public int id;
    public Student(String name,int id){
        this.name = name;this.id = id;
    }
    public String getName(){
        return this.name;
    }
    public void setName(String n){
        name = n;
    }
    public void printWelcome(){
        System.out.println("Welcome! "+this.getName()+"!");
    }
/*Embedded main function to replace redundant Driver class*/
    public static void main(String[] args) {
        Student mike = new Student("Mike Smith", 0);
        mike.printWelcome();
        GradStudent mike2 = new GradStudent("Mike Smith", 0, "Tacos");
        mike2.printWelcome();
    }
}
class GradStudent extends Student{
    private String dissertationTopic;
    public GradStudent(String name,int id, String dissertationTopic){
        super(name,id); this.dissertationTopic = dissertationTopic;
    }
    public String getTopic(){
        return dissertationTopic;
    }
    public void setTopic(String t){
        dissertationTopic = t;
    }
    public void printWelcome(){
        System.out.println("Welcome! to Graduate School! "+super.getName()+"!");
    }
}
