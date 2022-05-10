CREATE DATABASE `marketplace_database`;
USE `marketplace_database`;

CREATE TABLE `accounts` (
  `id` int(11) AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  PRIMARY KEY(`id`)
);

INSERT INTO `accounts` (`id`, `username`, `password`) VALUES
(1, 'Admin', '$2y$10$Gk.Q5Wyf9KliORTcdCsA2OERZpTZ1C6pXRQcTyjvqX94SZUV8rgMm');