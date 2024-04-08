ex1 <- c(4,5,6,6,6,7,7,7,7,7,7,8,8,8,9,10)
median(ex1)#7
mean(ex1)#7
qplot(ex1)#symmetrical (mean=median)

ex2 <- c(4,5,6,6,6,7,7,7,7,8)
median(ex2)#6.5
mean(ex2)#6.3
qplot(ex2)#skewed to left (mean < median)
