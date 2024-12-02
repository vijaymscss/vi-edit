export const LANGUAGE_LIST = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  go: "1.16.2",
  c: "10.2.0",
  cpp: "10.2.0",
};

export const INIT_CODE = {
  javascript: `
//Javascript 
console.log('Hello World');`,
  typescript: `
//Typescript 
const msg:string = "Hello World"
console.log(msg);
    `,
  python: `
//Python 
print("Hello, World!")
    `,
  java: `
//Java 
class Test
{
    public static void main(String []args)
    {
        System.out.println("My First Java Program.");
    }
};
    `,
  cpp: `
// C++ program to display "Hello World"

#include <iostream>
using namespace std;

int main()
{
    cout << "Hello World";
    return 0;
}
    `,
  c: `
// Simple C program to display "Hello World"

#include <stdio.h>

int main() {

    printf("Hello World");
    return 0;
}
    `,
  go: `
// the sample program will print the classic "hello world"
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
    `,
};
