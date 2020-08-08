class MyClass {
  myMethod() {
    const foo = 123;
    console.log('1', this);
    // When using arrow function the this keyword will be pointing to the same level as the the one above.
    // However if we use normal "function" keyword in setTimeout below, it will result of having global this,
    // pointing to the window instead of the class.
    setTimeout(() => {
      console.log('2', this);
    }, 0);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
