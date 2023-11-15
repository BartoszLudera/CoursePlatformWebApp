export const task = [
    {
        id: 0,
        command: "Count 2+2",
        stat_code:
            `#include <stdio.h>
      int main() {
            int a = 2; 
            int b=2;
            int output;
            //Use data above and write code here:


            printf("Suma a i b: %d\n", output);
            return 0;
}`,
        correct_output: "Suma a i b: 4",
    },
    {
        id: 1,
        command: "Count 10+10",
        stat_code:
            `#include <stdio.h>
      int main() {
            int a = 10; 
            int b = 10;
            int output;
            //Use data above and write code here:


            printf("Suma a i b: %d", output);
            return 0;
}`,
        correct_output: "Suma a i b: 20",
    },
    {
        id: 2,
        command: "Count 10+2",
        stat_code: "int a = 10; int b=2;",
        correct_output: "12",
    }
]