-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: isound
-- ------------------------------------------------------
-- Server version	5.7.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `playlist_details`
--

DROP TABLE IF EXISTS `playlist_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_details` (
  `playlist_id` varchar(40) NOT NULL,
  `media_id` varchar(20) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  KEY `playlist_id` (`playlist_id`),
  CONSTRAINT `playlist_details_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `user_playlists` (`playlist_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_details`
--

LOCK TABLES `playlist_details` WRITE;
/*!40000 ALTER TABLE `playlist_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `playlist_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_like`
--

DROP TABLE IF EXISTS `user_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_like` (
  `user_id` varchar(40) NOT NULL,
  `media_id` varchar(20) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updateAt` timestamp NULL DEFAULT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_like_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_like`
--

LOCK TABLES `user_like` WRITE;
/*!40000 ALTER TABLE `user_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_playlists`
--

DROP TABLE IF EXISTS `user_playlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_playlists` (
  `playlist_id` varchar(40) NOT NULL,
  `playlist_name` varchar(100) NOT NULL,
  `playlist_status` tinyint(1) DEFAULT NULL,
  `playlist_image` varchar(255) DEFAULT NULL,
  `playlist_description` text,
  `user_id` varchar(40) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`playlist_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_playlists_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_playlists`
--

LOCK TABLES `user_playlists` WRITE;
/*!40000 ALTER TABLE `user_playlists` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_playlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(40) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('010e1287-4229-44d5-942f-5628cd92a8b0','ngtrongduc106@gmail.com','$2b$10$ogT4YM4y1uJ/C/DaHw1wQOup4SvvlmupXJxZik4YhxMpqfrlw/0.u','Nguyen Trong Duc','2023-02-22 16:53:32','2023-02-22 16:53:32'),('21c793d3-93c7-43c8-9643-c817a6c24cc3','test1@gmail.com','$2b$10$lKIEGaBCkoGenKumQo.1G.qqOgUuEcSL/hsFGG/Bndz51wuYJNze6','Nguyen Trong Duc','2023-02-22 16:52:45','2023-02-22 16:52:45'),('3a68e530-a477-41c4-b251-e7515acbe51e','test3@gmail.com','$2b$10$3WHF/tzrGcwCQlaY6BMxeeIFCDFLaj.9rYk9lx1U/lQJH0r/6fnwK','Nguyen Trong Duc','2023-02-22 17:18:29','2023-02-22 17:18:29'),('56adee3d-0b93-47a0-a625-7b1817d5f643','test7@gmail.com','$2b$10$W8gn.TuPfX2kw7/O4l/s2uzI9XBRUWTC3PEI2v1CXAagX2V72i9oq','Nguyen Trong Duc','2023-02-23 13:03:49','2023-02-23 13:03:49'),('61d090b5-fbce-4baa-9cd8-067abfcc52e7','test5@gmail.com','123123','Nguyen Trong Duc','2023-02-23 13:01:29','2023-02-23 13:01:29'),('8224732a-5e0b-4c31-bf81-f5ab20f428ac','test6@gmail.com','$2b$10$OAraQ.Vm36URNZlcasCmuuQZbHb8UpfhYHno9jBRbURsZqQ.7qUA.','Nguyen Trong Duc','2023-02-23 13:03:07','2023-02-23 13:03:07'),('93d41c51-efef-4594-b691-d58cfc661a7e','test4@gmail.com','$2b$10$NjxxH7KsI26haLS2LyrkfOP/qk3fDE57yRAIYhwGG.2.XsKLFZdK2','Nguyen Trong Duc','2023-02-23 06:17:30','2023-02-23 06:17:30'),('e0c70055-44bb-4821-84bc-f904290ec3d1','test2@gmail.com','$2b$10$HLxW/MhvB5II9hFAGSKyWO8WEBJoTc9.8nUE9/5F39u8LKzoIu6jS','Nguyen Trong Duc','2023-02-22 12:46:21','2023-02-22 12:46:21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-25 23:25:19
