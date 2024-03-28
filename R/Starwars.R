#API https://swapi.py4e.com/
new_starwars<-starwars%>%mutate(height_ft=((height/2.54)/12),mass_lbs=(mass*2.2046))
averages<-starwars%>%group_by(species)%>%summarise(avg_height=((sum(height,na.rm=TRUE)))/n(),avg_mass=((sum(mass,na.rm=TRUE)))/n())
