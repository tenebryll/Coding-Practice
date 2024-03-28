amountOfMeals<-3 #Modular amount of meals eaten each day.
amountOfDays<-3 #Modular amount of days.

days<-list() #Days list buffer.
averages<-list() #Averages list buffer.
percentOfCalories <- list() #Percent of Calories list buffer.
#**For loop that creates day variables according to the amount of days.**
for(i in 1:amountOfDays){
  # paste0() is used to declare combined local variable name with index.
  day_var = paste0("day",i)
  # assign() is used to assign an empty tibble with header variables to the \
  # - newly created unknown local variable name assigned with a tibble buffer.
  assign(day_var,tibble(read.csv("Food-Data.csv"))%>%head(0))
  # The preceding line adds the newly created unknown local variable to the \
  # - days list from the Global Environment.
  days[[i]]<-get(day_var, envir=.GlobalEnv)
}

#**For loop that adds the corresponding day observations to the embedded \
# - day variables, thus filling in the empty tibble buffer.**
z<-1;
for(x in 1:amountOfDays){
  for(y in 1:amountOfMeals){
    days[[x]]<-days[[x]]%>%add_row(read.csv("Food-Data.csv")%>%slice(z)); z<-z+1
  }
}

#**For loop like the previous days loop that calculates averages of the \
# - attributed embedded day variable

for(i in 1:amountOfDays){
  # paste0() is used to declare combined local variable name with index.
  avg_var = paste0("avg_day",i)
  # assign() is used to assign a tibble with the average values of each \
  # - nutrition percentage according to calories.
  assign(avg_var,tibble(
    avg_Calories=(sum(days[[i]][["Calories"]],na.rm =TRUE)/amountOfMeals),
    avg_Carbs=(sum(days[[i]][["Carbs.g."]],na.rm =TRUE)/amountOfMeals),
    avg_Proteins=(sum(days[[i]][["Proteins.g."]],na.rm =TRUE)/amountOfMeals),
    avg_Fats=(sum(days[[i]][["Fats.g."]],na.rm =TRUE)/amountOfMeals)))
  # The preceding line adds the newly created unknown local variable to the \
  # - days list from the Global Environment.
  averages[[i]]<-get(avg_var, envir=.GlobalEnv)
}

#**For loop that is basically same as averages loop but calculates the \
# - percent of nutrition for the total amount of calories.
for(i in 1:amountOfDays){
  # paste0() is used to declare combined local variable name with index.
  per_var = paste0("cal_day",i)
  # assign() is used to assign a tibble with the percent value of calories \
  # - each nutrition item has.
  assign(per_var,tibble(
    total_calories=(sum(days[[i]][["Calories"]],na.rm =TRUE)),
    per_Carbs=(sum(days[[i]][["Carbs.g."]],na.rm =TRUE)*4/sum(days[[i]][["Calories"]],na.rm =TRUE)*100),
    per_Proteins=(sum(days[[i]][["Proteins.g."]],na.rm =TRUE)*4/sum(days[[i]][["Calories"]],na.rm =TRUE)*100),
    per_Fats=(sum(days[[i]][["Fats.g."]],na.rm =TRUE)*9/sum(days[[i]][["Calories"]],na.rm =TRUE)*100)))
  # The preceding line adds the newly created unknown local variable to the \
  # - days list from the Global Environment.
  percentOfCalories[[i]]<-get(per_var, envir=.GlobalEnv)
}

#**These lists are NOT INTENDED for the "view()" function and instead are \
# -intended to be called by the console**
#calling the "percentOfCalories" variable will return a listthe total and percentages of \
#- total calories each nutrition item for each day.

#calling the "averages" variable will return a list the averages of \
#- total nutrition that day had.

#Extra calling the "days" variable will return a list of tibbles for each day.
