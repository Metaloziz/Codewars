function positiveSum(arr) {

            var a= 0;
            for (let i = 0; i < arr.length; i++) {

                if(arr[i]>0){
                    a += arr[i]
                }                 
            }return a;

        }
