CREATE SCHEMA IF NOT EXISTS `tin12` ;

CREATE TABLE IF NOT EXISTS `tin12`.`student` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `studentNumber` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `tin12`.`subject` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


CREATE TABLE IF NOT EXISTS `tin12`.`student_subject` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `student_id` INT NOT NULL,
  `subject_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

INSERT IGNORE INTO `tin12`.`student` (`id`, `firstName`, `lastName`,`studentNumber`) VALUES 
  (1, 'Jan', 'Kowalski','s12321'),
  (2, 'Adam', 'Zieliński','s22331'),
  (3, 'Marian', 'Nowak','s52351');

INSERT IGNORE INTO `tin12`.`subject` (`id`, `name`) VALUES 
  (1, 'Calculus'),
  (2, 'Programing in Java'),
  (3, 'Computer Graphics');

INSERT IGNORE INTO `tin12`.`student_subject` (`id`, `student_id`,`subject_id`) VALUES 
  (1, 2, 3),
  (2, 3, 1),
  (3, 3, 2),
  (4, 1, 2),
  (5, 1, 3),
  (6, 1, 1);
  