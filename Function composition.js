const compose = (...funs) => value => funs.reduceRight((res, fun) => fun(res), value)
