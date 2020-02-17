CREATE SCHEMA IF NOT EXISTS movie_app;

CREATE TABLE IF NOT EXISTS movie_app.Award (
    id int UNSIGNED AUTO_INCREMENT NOT NULL ,
    title varchar(100) NOT NULL,
    CONSTRAINT Award_pk PRIMARY KEY (Id)
);

-- Table: Movie
CREATE TABLE IF NOT EXISTS movie_app.Movie (
    id int UNSIGNED AUTO_INCREMENT  NOT NULL ,
    title varchar(20) NOT NULL,
    release_date date NULL,
    global_rating float(2,1) NULL,
    plot varchar(100) NULL,
    genre varchar(20) NULL,
    runtime int NULL,
    country varchar(50) NULL,
    poster varchar(500) NULL,
    CONSTRAINT Movie_pk PRIMARY KEY (id)
);

-- Table: MovieAward
CREATE TABLE IF NOT EXISTS movie_app.MovieAward (
    Movie_id int NOT NULL,
    Award_Id int NOT NULL,
    date_awarded date NOT NULL,
    CONSTRAINT MovieAward_pk PRIMARY KEY (Movie_id,Award_Id)
);

-- Table: MovieUser
CREATE TABLE IF NOT EXISTS movie_app.MovieUser (
    User_id int NOT NULL,
    Movie_id int NOT NULL,
    user_ramovie_appg float(2,1) NULL,
    CONSTRAINT MovieUser_pk PRIMARY KEY (User_id,Movie_id)
);

-- Table: User
CREATE TABLE IF NOT EXISTS movie_app.User (
    id int UNSIGNED AUTO_INCREMENT  NOT NULL ,
    username varchar(20) NOT NULL,
    password varchar(30) NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (id)
);

-- views
-- View: UserMovieInfo
CREATE or REPLACE VIEW movie_app.UserMovieInfo AS
SELECT mu.Movie_Id, mu.User_Id, u.username, mu.user_ramovie_appg, m.title, m.release_date, m.global_rating, m.plot, m.genre, m.runtime, m.country, m.poster
FROM movie_app.Movie m JOIN movie_app.MovieUser mu on 
mu.movie_id = m.id JOIN movie_app.User u on mu.user_id = u.id;

-- View: AwardMovieInfo
CREATE or REPLACE VIEW movie_app.AwardMovieInfo AS
SELECT ma.Movie_Id, ma.Award_Id, a.title as awardTitle, ma.date_awarded, m.title as movieTitle, m.release_date, m.global_rating, m.plot, m.genre, m.runtime, m.country, m.poster FROM movie_app.Movie m JOIN movie_app.MovieAward ma on 
ma.Award_id = m.id JOIN movie_app.Award a on ma.Award_id = a.id;

-- foreign keys
-- Reference: MovieAward_Award (table: MovieAward)
-- ALTER TABLE movie_app.MovieAward ADD CONSTRAINT MovieAward_Award FOREIGN KEY MovieAward_Award (Award_Id)
--     REFERENCES Award (Id);

-- -- Reference: MovieAward_Movie (table: MovieAward)
-- ALTER TABLE movie_app.MovieAward ADD CONSTRAINT MovieAward_Movie FOREIGN KEY MovieAward_Movie (Movie_id)
--     REFERENCES Movie (id);

-- -- Reference: MovieUser_Movie (table: MovieUser)
-- ALTER TABLE movie_app.MovieUser ADD CONSTRAINT MovieUser_Movie FOREIGN KEY MovieUser_Movie (Movie_id)
--     REFERENCES Movie (id);

-- -- Reference: MovieUser_User (table: MovieUser)
-- ALTER TABLE movie_app.MovieUser ADD CONSTRAINT MovieUser_User FOREIGN KEY MovieUser_User (User_id)
--     REFERENCES User (id);

-- End of file.
INSERT IGNORE INTO movie_app.Movie (`id`, `title`, `release_date`,`global_rating`,`plot`,`genre`, `runtime`,`country`,`poster`) VALUES
(2,"Cora vs. Tarbell: Apples",STR_TO_DATE("16 Sep 2007", '%d %b %Y'),NULL,"","Game-Show, Reality-TV","60","",""),
(3,"A Fazer o Mal",STR_TO_DATE("18 Sep 2004", '%d %b %Y'),NULL,"Filmic materials in conflict. Fragments of reality and fiction struggling for the life of a movie. The presence and the look of Alberto Seixas Santos. I was there watching the Making of MAL.","Documentary, Short","25","Portugal",""),
(4,"La crise du logement",STR_TO_DATE("18 Oct 1961", '%d %b %Y'),NULL,"","Comedy","26","",""),
(5,"Say What you Want",STR_TO_DATE("12 Aug 2017", '%d %b %Y'),NULL,"","Short","","Germany",""),
(6,"Shakespeare and Victor Hugo's Intimacies",STR_TO_DATE("13 Nov 2009", '%d %b %Y'),NULL,"My grandmother??s lodging house situated at the corner of Shakespeare and Victor Hugo streets in Mexico City. When I was ten years old I met one of them. His name was Jorge Riosse. My grand...","Documentary, Crime, Family, Thriller","83","Mexico","https://m.media-amazon.com/images/M/MV5BMTk0ODQ4MzQ4Ml5BMl5BanBnXkFtZTcwNDAzODg5Mg@@._V1_SX300.jpg"),
(7,"Last Christmas Standing",STR_TO_DATE("06 Dec 2011", '%d %b %Y'),NULL,"Mike's Christmas spirit gets dampened when Ryan (Nick Jonas), the father of Kristen's baby, unexpectedly comes back to town after a long absence. Krismovie_app's boyfriend, Kyle, also doesn't ...","Comedy","22","USA","https://m.media-amazon.com/images/M/MV5BMTU2MDQwMTYwNF5BMl5BanBnXkFtZTgwNTM1MzQ2MjE@._V1_SX300.jpg"),
(8,"Um Dia, O Amor",STR_TO_DATE("22 Sep 1975", '%d %b %Y'),NULL,"","","60","Brazil",""),
(9,"Police Car 17",STR_TO_DATE("30 Sep 1933", '%d %b %Y'),2.9,"","Crime, Drama","57","USA","https://m.media-amazon.com/images/M/MV5BY2UzMTk5MDMtMTU3NC00OGNhLWFjNWEtN2Y1MmM5MjhiMDM1XkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_SX300.jpg"),
(10,"Episode dated 23 October 1963",STR_TO_DATE("23 Oct 1963", '%d %b %Y'),NULL,"","Music","","",""),
(11,"Frozen",STR_TO_DATE("31 Aug 2010", '%d %b %Y'),NULL,"A woman goes to see Daniel for Botox. She wants to look like she did in an old photo she's brought with her. Daniel has his doubts though - she talks to people who aren't there, and her ...","Drama","30","UK",""),
(12,"Episode #1.5",STR_TO_DATE("01 May 2005", '%d %b %Y'),NULL,"","Comedy","45","",""),
(13,"A Whole New Ballgame",STR_TO_DATE("12 Sep 1998", '%d %b %Y'),NULL,"","Comedy","30","USA",""),
(14,"Glomer Punks Out/Louvre Affair",STR_TO_DATE("02 Nov 1985", '%d %b %Y'),NULL,"","Animation, Fantasy","30","","https://m.media-amazon.com/images/M/MV5BMjA3NzI0ODEyOV5BMl5BanBnXkFtZTcwNjk1NDMyMQ@@._V1_SX300.jpg"),
(15,"Sockets",STR_TO_DATE("", '%d %b %Y'),NULL,"An insomniac descends into madness as his hallucinations take a sinister turn.","Short, Drama, Horror","12","UK",""),
(16,"Sins of the Mother",STR_TO_DATE("26 Apr 2000", '%d %b %Y'),NULL,"","Drama","30","UK",""),
(17,"Cheyne Magnusson and Mike Murciano",STR_TO_DATE("25 Mar 2009", '%d %b %Y'),NULL,"","Music, Sport, Talk-Show","","USA","https://m.media-amazon.com/images/M/MV5BMjMwMDI5NTc3NF5BMl5BanBnXkFtZTgwMzQ4NDY1MzE@._V1_SX300.jpg"),
(18,"Jane Blond DD7",STR_TO_DATE("26 Jun 1987", '%d %b %Y'),3.8,"","Adult","","USA",""),
(19,"Episode dated 4 June 1968",STR_TO_DATE("04 Jun 1968", '%d %b %Y'),NULL,"","Family","","",""),
(20,"The New Girl",STR_TO_DATE("01 Aug 2001", '%d %b %Y'),NULL,"","Adult, Fantasy","120","USA","https://m.media-amazon.com/images/M/MV5BMzUxOTgxMTE5NF5BMl5BanBnXkFtZTcwMzQyNTQxNw@@._V1_SX300.jpg"),
(21,"Boy",STR_TO_DATE("16 Sep 2007", '%d %b %Y'),NULL,"A young boy sets out on an epic journey to fetch water for his spoiled sister, but returns with something much more satisfying.","Short, Drama","3","",""),
(22,"Episode #1.3",STR_TO_DATE("16 Sep 2007", '%d %b %Y'),3.0,"","Comedy","","",""),
(23,"Love Is Strange",STR_TO_DATE("08 Feb 2007", '%d %b %Y'),4.5,"Two guys are hired to dispose of a body. One becomes obsessed and decides to find out why she was killed.","Short, Crime, Drama","8","USA",""),
(24,"The Bennets",STR_TO_DATE("06 Feb 2006", '%d %b %Y'),2.4,"","Documentary, Short","","UK",""),
(25,"California Exotic Novelties",STR_TO_DATE("22 Sep 2000", '%d %b %Y'),NULL,"","","60","","https://m.media-amazon.com/images/M/MV5BMTYwMTk3MjY3MV5BMl5BanBnXkFtZTgwNDEwMzQxMzE@._V1_SX300.jpg"),
(26,"Billy528",STR_TO_DATE("16 Sep 2007", '%d %b %Y'),NULL,"","Short, Drama","24","",""),
(27,"Tarbes/Montauban",STR_TO_DATE("17 Jul 2006", '%d %b %Y'),NULL,"","Family, Game-Show","120","",""),
(28,"Mariya no kimochi",STR_TO_DATE("02 Dec 2006", '%d %b %Y'),NULL,"","Animation, Comedy, Drama","","",""),
(29,"Episode dated 13 October 2003",STR_TO_DATE("13 Oct 2003", '%d %b %Y'),NULL,"","Talk-Show","60","",""),
(30,"Edinburgh",STR_TO_DATE("31 Aug 2008", '%d %b %Y'),NULL,"","Music","35","",""),
(31,"Wappy's Sad Story",STR_TO_DATE("14 Jan 1967", '%d %b %Y'),NULL,"Wappy and Bedford decide to see who can tell the saddest story. When its Wappy's turn, his story is so sad that everyone starts crying. However, a problem arises that no one can stop.","Comedy","58","","https://m.media-amazon.com/images/M/MV5BNDUwNzk4MzYyNl5BMl5BanBnXkFtZTcwMjQxNTMxNg@@._V1_SX300.jpg"),
(32,"Assault by Air",STR_TO_DATE("07 Mar 2010", '%d %b %Y'),NULL,"The loggers struggle to get back on track after losing a man. At Browning, a weak cable threatens to kill half the crew, while the only remaining greenhorn at Rygaard is in the line of fire...","Documentary, Reality-TV","","","https://m.media-amazon.com/images/M/MV5BMTQzMDQzMzExNF5BMl5BanBnXkFtZTgwOTYzNzc3MjE@._V1_SX300.jpg"),
(33,"Episode #1.3",STR_TO_DATE("16 Sep 2007", '%d %b %Y'),NULL,"","Drama, History","","","https://m.media-amazon.com/images/M/MV5BMTI2MTk2NTQzN15BMl5BanBnXkFtZTcwMzQ4NzEzMQ@@._V1_SX300.jpg"),
(34,"Into the Picture Scroll: The Tale of Yamanaka Tokiwa",STR_TO_DATE("23 Sep 2005", '%d %b %Y'),NULL,"Experimental film transposing frame by frame the famous 150-meter Japanese parchment into celluloid. The original parchment tells the story of a son trying to avenge his mother's death.","","100","Japan",""),
(36,"The Unshod Maiden",STR_TO_DATE("01 Feb 1932", '%d %b %Y'),NULL,"A condensed re-edit of Lois Weber's social drama Shoes (1916), with satirical narration.","Short","10","USA",""),
(37,"Pigan brinner!",STR_TO_DATE("27 Jan 2008", '%d %b %Y'),NULL,"Movie is shot in black/white 35 mm with the hand cranked camera Pathé, from 1914, (actually the same camera used by D.o.P. Julius ...","Short","11","Sweden",""),
(38,"Stick Man",STR_TO_DATE("16 Sep 2007", '%d %b %Y'),NULL,"One Stick Man sees follows his nemesis into a building, where an epic battle awaits them. But then the question arises: who is the true nemesis?","Animation, Short, Action","5","USA",""),
(39,"Episode dated 5 June 1999",STR_TO_DATE("05 Jun 1999", '%d %b %Y'),NULL,"","Game-Show","","",""),
(40,"Episode #2.3",STR_TO_DATE("22 Sep 2009", '%d %b %Y'),NULL,"","Drama, Romance","45","","https://ia.media-imdb.com/images/M/MV5BYTRiNTIyYmQtNjAwMC00NjNmLTgwZWEtODZhOTc2YjAwOWYyXkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_SX300.jpg"),
(41,"Batgirl Returns",STR_TO_DATE("12 Nov 1994", '%d %b %Y'),NULL,"Batgirl, Catwoman and Robin team up to investigate the theft of a valuable cat statuette.","Animation, Action, Adventure","22","USA","https://m.media-amazon.com/images/M/MV5BMTQ0MTcyNzgwN15BMl5BanBnXkFtZTgwNDI5MTg3MjE@._V1_SX300.jpg"),
(42,"Sinterklaasjournaal",STR_TO_DATE("13 Nov 2002", '%d %b %Y'),NULL,"A daily television report, showing the adventures of Sinterklaas and his Zwarte Pieten during their annual stay in the Netherlands.","Adventure, Comedy, Drama","10","Netherlands","https://m.media-amazon.com/images/M/MV5BZWMyMjU3Y2ItMDA3ZC00Njg1LWIyZDItMmU3MTc5MjRmNzkyXkEyXkFqcGdeQXVyNTk5ODg4NDA@._V1_SX300.jpg"),
(43,"Tollgate Girl",STR_TO_DATE("17 Dec 2001", '%d %b %Y'),NULL,"","Romance","90","Malaysia","https://m.media-amazon.com/images/M/MV5BZDE1ODVhYzktZTYyNi00NzEzLTlkNzYtNDA5OWE1YTdlM2FmXkEyXkFqcGdeQXVyMjgzNDQyMjE@._V1_SX300.jpg"),
(44,"Terror in the Skies!",STR_TO_DATE("26 Dec 2009", '%d %b %Y'),3.9,"","News, Talk-Show","60","","https://m.media-amazon.com/images/M/MV5BMjA0ODMzOTk4NF5BMl5BanBnXkFtZTcwNDAzNTI0MQ@@._V1_SX300.jpg"),
(45,"The Human Relics",STR_TO_DATE("07 Jun 1970", '%d %b %Y'),5.0,"The crew receive a signal from the asteroid Arcturus. They find a 2oth century Earth space capsule with an astronaut in a coma.","Family, Sci-Fi","30","",""),
(46,"Jokyû",STR_TO_DATE("20 Feb 1955", '%d %b %Y'),NULL,"","","105","Japan",""),
(47,"O Largo de São Francisco de Paula",STR_TO_DATE("", '%d %b %Y'),NULL,"","Documentary, Short","","Brazil",""),
(48,"English Lessons",NULL,"","","Animation, Short","20","Finland",""),
(49,"Adios al septimo de linea",STR_TO_DATE("01 Sep 2010", '%d %b %Y'),3.5,"","History, War","","Chile","https://m.media-amazon.com/images/M/MV5BODdlYmNkN2UtZDVhOS00MWMxLTljNjYtMTYzNzA1N2ZhZWUxXkEyXkFqcGdeQXVyODY0NTMxNTE@._V1_SX300.jpg"),
(50,"Some Vicious Mole of Nature",NULL,2.1,"","Comedy, Crime, Drama","","","https://m.media-amazon.com/images/M/MV5BMTMyODgxNDcxOV5BMl5BanBnXkFtZTcwMzQ2NzEzMQ@@._V1_SX300.jpg"),
(51,"Crossing at White Feather",STR_TO_DATE("07 Dec 1965", '%d %b %Y'),NULL,"Rowdy hires a drunk to lead the herd across a dangerous river. The man is afraid, fakes an injury, and tries to sell a third of Rowdy's herd to a conman. Rowdy helps the young son to cope with his father by talking about his own father.","Adventure, Drama, Western","60","USA","https://m.media-amazon.com/images/M/MV5BMTMzODAzMDgyMF5BMl5BanBnXkFtZTcwNzQ0MzA5NA@@._V1_SX300.jpg");

insert IGNORE into movie_app.Award (`id`,`title`) values 
(1,"The Oscars"),
(2,"The Academy Awards"),
(3,"Slideshow: Minority Oscar Winners"),
(4,"National Society of Film Critics Awards"),
(5,"Broadcast Film Critics Association Awards"),
(6,"National Board of Review Awards"),
(7,"Golden Globe Awards"),
(8,"Annual Directors Guild of America Awards"),
(9,"MTV Movie Awards"),
(10,"NAACP Image Awards"),
(11,"Independent Spirit Awards"),
(12,"New York Film Critics Circle Awards"),
(13,"Los Angeles Film Critics Association Awards"),
(14,"Boston Society of Film Critics Awards"),
(15,"British Academy of Film and Television Awards"),
(16,"Cannes Film Festival Winners");

insert IGNORE into movie_app.User values 
(1, "admin", "admin");

insert IGNORE into movie_app.MovieAward ( `Movie_Id`,`Award_Id`, `date_awarded` ) values 
(1, 9,STR_TO_DATE("12 Nov 2020", '%d %b %Y')),
(6, 7, STR_TO_DATE("21 Feb 2000", '%d %b %Y')),
(12, 4, STR_TO_DATE("11 Sep 2012", '%d %b %Y')),
(45, 5, STR_TO_DATE("01 Jan 2000", '%d %b %Y')),
(14, 10, STR_TO_DATE("06 Aug 2019", '%d %b %Y')),
(23, 11, STR_TO_DATE("21 Sep 2020", '%d %b %Y')),
(14, 14, STR_TO_DATE("21 Dec 2001", '%d %b %Y')),
(34, 12, STR_TO_DATE("21 Apr 2003", '%d %b %Y')),
(21, 1, STR_TO_DATE("21 May 2004", '%d %b %Y'));