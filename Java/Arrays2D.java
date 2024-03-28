/**
@Author Milo Thompson
@Since 2/29/24
@Purpose Messing with 2D arrays.
*/
public class Arrays2D {
	public static int sum(int[][] array){
		int sum = 0;
		for(int x = 0; x < array.length; x++ ){
			for(int y = 0; y < array[x].length; y++){
				sum += array[x][y];
			}
		}
		return sum;
	}
	public static int rowSum(int[][] array, int row){
		int sum = 0;
		for(int i = 0; i < array[row].length; i++){
			sum += array[row][i];
		}
		return sum;
	}
	
	public static int colSum(int[][] array, int col){
		int sum = 0;
		for(int x = 0; x < array.length; x++ ){
			sum += array[x][col];
		}
		return sum;
	}
	
	public static int sum2(int[][] array){
		int sum = 0;
		for(int x = 0; x < array.length; x++ ){
			sum+=rowSum(array,x);
		}
		return sum;
	}

	public static int largest(int[][] array){
		int largest = array[0][0];
		for(int x = 0; x < array.length; x++){
			for(int y = 0; y < array[0].length; y++){
				if(array[x][y] > largest){
					largest = array[x][y];
				}
			}
		}
		return largest;
	}
	public static int largestByRow(int[][] array, int  row){
		int largest = array[0][0];
		for(int x = 0; x < array[row].length; x++){
			if(array[row][x] > largest){largest = array[row][x];}
		}
		return largest;
	}
	public static int largest2(int[][] array){
		int largest = array[0][0],temp;
		for(int x = 0; x < array[0].length;x++){
			if((temp = largestByRow(array,x)) > largest){
				largest = temp;	
			}
		}
		return largest;
	}
	public static void printTranspose(int[][] array){
		for(int x = 0; x < array.length; x++){
			for(int y = 0; y < array[0].length; y++){
				System.out.print(array[y][x]+" ");
			}
			System.out.println();
		}
	}
	public static void main(String[] args) {
		int[][] num_list = {{1,2,3},
				    {4,5,6},
				    {7,8,9}};
		System.out.println("Sum:\n"+sum(num_list));
		System.out.println("\nSum of Row 1:\n"+rowSum(num_list,2));
		System.out.println("\nSum of Column 1:\n"+colSum(num_list,2));
		System.out.println("\nSum2:\n"+sum2(num_list));
		System.out.println("\nLargest:\n"+largest(num_list));
		System.out.println("\nLargest by Row:\n"+largestByRow(num_list,0));
		System.out.println("\nLargest2:\n"+largest2(num_list));
		System.out.println("\nTranspose:\n");printTranspose(num_list);
	}
}
