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
-- Table structure for table `cart_table`
--

DROP TABLE IF EXISTS `cart_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cart_table` (
  `cartId` varchar(50) NOT NULL,
  `products` varchar(250) DEFAULT NULL,
  `dateAdded` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` char(1) NOT NULL,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_table`
--

LOCK TABLES `cart_table` WRITE;
/*!40000 ALTER TABLE `cart_table` DISABLE KEYS */;
INSERT INTO `cart_table` VALUES ('C101','[{\"productId\":\"2\",\"quantity\":3},{\"productId\":\"0\",\"quantity\":3},{\"productId\":\"1\",\"quantity\":3}]','2018-09-19 10:36:46','I'),('C102','[{\"productId\":\"2\",\"quantity\":2},{\"productId\":\"1\",\"quantity\":3},{\"productId\":\"1\",\"quantity\":3},{\"productId\":\"0\",\"quantity\":3}]','2018-09-19 12:12:47','I'),('Rahul1424','[{\"productId\":\"3\",\"quantity\":2},{\"productId\":\"3\",\"quantity\":1},{\"productId\":\"1\",\"quantity\":4},{\"productId\":\"4\",\"quantity\":1},{\"productId\":\"4\",\"quantity\":1},{\"productId\":\"4\",\"quantity\":1}]','2018-09-19 10:22:05','I'),('USER002','EGGS','2018-09-21 15:07:21','I');
/*!40000 ALTER TABLE `cart_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-24 17:03:15
