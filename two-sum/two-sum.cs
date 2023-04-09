public class Kata
{
  public static int[] TwoSum(int[] numbers, int target) {
    int[] output =  new int[2];
    for (int i = 0; i < numbers.Length - 1; i++) {
        for (int j = i + 1; j < numbers.Length; j ++) {
            if (numbers[i] + numbers[j] == target) {
                output[0] = i;
                output[1] = j;
            }
         
        }
    }
    return output;
  }
}