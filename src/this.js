const obj = {
  result1() {
    console.log(this);
  },

  result2: () => {
    console.log(this);
  },

  inner: {
    result3() {
      console.log(this);

      const innerInner1 = () => {
        console.log(this);
      };

      function innerInner2() {
        console.log(this);
      }

      innerInner1();
      innerInner2();
    },

    result4: () => {
      console.log(this);

      const innerInner1 = () => {
        console.log(this);
      };

      function innerInner2() {
        console.log(this);
      }

      innerInner1();
      innerInner2();
    },
  },
};

obj.result1();
obj.result2();
obj.inner.result3();
obj.inner.result4();
