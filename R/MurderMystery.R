#On a Rainy friday evening a body was found in a dumpster with multiple crescent shaped stab wounds.
#Police have gathered the following details:
#- The murderer lives at the house number 1111.
#- The police suspect that the murderer is supposedly middle aged.
#- Police suspect the murder happened around 7 that same day
#You start you investigation by interviewing the suspects.

interviews <-tibble(ages = c(49, 30, 33, 32, 88, 38, 47, 11),
                    interview = c("I was cooking tofu that night at around 7pm, I was no where near the murder",
                                  "Murder? what murder? who died?",
                                  "Do you like cars? I drive a cadillac.",
                                  "...",
                                  "Back in my day we didn't have people dying left and right like this.",
                                  "I saw the murder happen on express dr, they had brown hair",
                                  "I AIN'T NO SNITCH YO",
                                  "I was just riding my bike to the pizza place on elm st I didn't see anything kind sir"
                    ),
                    notes = c(
                      "Suspect seemed nervous and fidgety", 
                      "Suspect had no idea of the murder that had taken place", 
                      "Suspect was giggly and kept changing the topic", 
                      "Suspect refused to speak", 
                      "Suspect was a fraile old man", 
                      "Suspect seems creditable based on body language and tone", 
                      "Suspect was unwilling to cooperate",
                      "Suspect is a little girl"
                    )
)

#Match age to get ss_num 
#(Eliminates ss_num 9828271 and 2124312 for not being middle aged)
#Leaves ss_nums 1232314,8312312,2312323,9231412,9981234 to be suspects
identifiers <- tibble(ss_num = c(1232314,8312312,2312323,9231412,01024312,2124312,9981234,9828271),
                      ages = c(49, 30, 33, 32, 88, 38, 47, 11),
                      pob = c("Illinois", "Louisiana", "Georgia", "California", "Pennsylvania", "Louisiana", "Illinois", "Georgia"),
                      foot_size = c(2.5, 7, 10, 5, 9, 4.5, 10, 13),
                      eyeColor =  c("Blue", "Green", "Blue", "Brown", "Hazel", "Blue", "Amber", "Purple")
)


#ss_num to hair_color (Suspect haircolor discovered by interview)
#(Eliminates 8312312,9231412,01024312, 2124312, 9981234 due to non-brown hair)(with 9828271 already eliminated due to age)
#Leaves ss_num 1232314 or 2312323 to be the suspect
suspects_hair <- tibble(ss_num = c(1232314,8312312,2312323,9231412,01024312,2124312,9981234,9828271),
                        hair_color = c("Brown", "Black", "Brown", "white", "red", "Blond", "Black", "Brown")
)


#Match ss_num to firstN and lastN 
#(Eliminated ss_nums 8312312,9231412,01024312,2124312,9981234,9828271)
#(ss_nums converted to names of Carl Mosh, Zoey Youseulf, Kyle Thumper,Jake Thomas, Sarah Eddy,and Rose Franks)
#Leaves the murderer to be either Bob Dol or Bob Yung
suspects <- tibble(firstN = c("Bob","Carl","Bob","Zoey","Kyle","Jake","Sarah","Rose"),
                   lastN = c("Dol","Mosh","Yung","Youseulf","Thumper","Thomas","Eddy","Franks"),
                   ss_num = c(1232314,8312312,2312323,9231412,01024312,2124312,9981234,9828271)
)


#Use lastN to match address
#Match last name of Dol to 1111 and you have found the murderer
addresses <-tibble(lastN = c("Dol","Mosh","Yung","Youseulf","Thumper","Thomas","Eddy","Franks"),
                   number_address = c(1111,1245,1678,1076,3678,2345,9087,9765), 
                   street_name = c("express dr","elm strt","buckingham ave","seasame dr" ,"southside ave","northheights ave","hapmtons dr","mlk dr"), 
                   zipcode = c(70915,70858,80921,20536,34567,87981,54327,89012)
)

evidence<-tibble(street = c("mlk dr","elm strt","buckingham ave","seasame dr" ,"southside ave","northheights ave","hapmtons dr","express dr"),
                 time = c(10, 11, 1, 5, 9, 8, 2, 7),
                 weapons = c("Knife", "Bat", "Gun", "Axe", "Chair", "Sicle", "Spoon", "Icecream scoop"),
                 notes = c("Knife was found near body without fingerprints", 
                           "The Bat was found near a pizzaria which is an odd place to be", 
                           "The crescent wounds could not be stab wounds at all and could be bullet holes", 
                           "Weapon of a previously caught murderer that could be back at it again", 
                           "Was near the body covered in blood but appears to have no markings indicating use", 
                           "The weapon could have be used at an angle giving the appearance of crescent stab wounds", 
                           "The spoon was found near tiny footprints in the mud and could have caused crescent stab wounds", 
                           "The Icecream scoop was circular and and could have causes the crescent stab wounds")
)

weather <- tibble(time = c(10, 11, 1, 5, 9, 8, 2, 7),
                  street = c("mlk dr","elm strt","buckingham ave","seasame dr" ,"southside ave","northheights ave","hapmtons dr","express dr"),
                  weather = c("Clear", "Clear", "Light Rain", "Rain", "Rain", "Light Rain", "Light Rain", "Heavy Rain")
)



suspect_cars <- tibble(ss_num = c(1232314,8312312,2312323,9231412,01024312,2124312,9981234,9828271),
                       car_names = c("ford", "cadillac","dodge","honda","chevrolet", "chevrolet", "cadillac", "dodge"),
                       licence_plate = c("123hat", "231tap", "591xis", "947hqa", "2931ht", "146tyx", "174wgf", "184w1f"),
                       state = c("wet","dry","little moist","dry","wet","wet","dry","little moist")
)

