-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: farm2home
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_name`
--

DROP TABLE IF EXISTS `product_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `product_name` (
  `product_name` varchar(30) NOT NULL,
  `category` varchar(20) NOT NULL,
  PRIMARY KEY (`product_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_name`
--

LOCK TABLES `product_name` WRITE;
/*!40000 ALTER TABLE `product_name` DISABLE KEYS */;
INSERT INTO `product_name` VALUES ('Apple','Fruits'),('Apricot','Fruits'),('Avocado','Fruits'),('Banana','Fruits'),('Beetroot','Vegetable'),('Black plum','Fruits'),('Blackberry','Fruits'),('Bottle Gourd','Vegetable'),('Bread fruit','Fruits'),('Brinjal','Vegetable'),('Broad Beans','Vegetable'),('Cabbage','Vegetable'),('Capsicum','Vegetable'),('Carrot','Vegetable'),('Cauliflower','Vegetable'),('Coriander leaves','Vegetable'),('Corn Maize','Vegetable'),('Cucumber','Fruits'),('Curry leaves','Vegetable'),('CustardApple','Fruits'),('Dates','Fruits'),('Dragon fruit','Fruits'),('Drumstick - moringa','Vegetable'),('Figs','Fruits'),('Garlic','Vegetable'),('Grapes','Fruits'),('Green Beans','Vegetable'),('Green Chili','Vegetable'),('Green Peas','Vegetable'),('Kiwi','Fruits'),('LadyFinger','Vegetable'),('Lychee','Fruits'),('Mango Ripe','Fruits'),('Mushroom','Vegetable'),('Onion','Vegetable'),('Orange','Fruits'),('Papaya Ripe','Fruits'),('Pear','Fruits'),('Pineapple','Fruits'),('Potato','Vegetable'),('Pumpkin','Vegetable'),('Radish','Vegetable'),('Sweet Potato','Vegetable'),('Tamarind','Vegetable'),('Tomato','Vegetable'),('Watermelon','Fruits');
/*!40000 ALTER TABLE `product_name` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-25 21:42:54
