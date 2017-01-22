-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 22, 2017 at 02:22 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Dumping data for table `menu`
--

INSERT INTO `Menu` (`product_id`, `product_cost`, `product_name`, `product_description`, `product_quantity`, `product_type`) VALUES
(1, 110, 'Espresso', NULL, NULL, 'Coffee and tea'),
(2, 150, 'Espresso sa mlekom', NULL, NULL, 'Coffee and tea'),
(3, 160, 'Nes', NULL, NULL, 'Coffee and tea'),
(4, 180, 'Latte', NULL, NULL, 'Coffee and tea'),
(5, 200, 'Mocha', NULL, NULL, 'Coffee and tea'),
(6, 120, 'Domaća kafa', NULL, NULL, 'Coffee and tea'),
(7, 150, 'Čaj', NULL, NULL, 'Coffee and tea'),
(8, 170, 'Cappuccino', NULL, NULL, 'Coffee and tea'),
(9, 150, 'Coca cola', NULL, NULL, 'Soft drinks'),
(10, 150, 'Fanta', NULL, NULL, 'Soft drinks'),
(11, 150, 'Schweppes tonik', NULL, NULL, 'Soft drinks'),
(12, 150, 'Schwepps bitter', NULL, NULL, 'Soft drinks'),
(13, 150, 'Sprite', NULL, NULL, 'Soft drinks'),
(14, 150, 'Kisela voda', NULL, NULL, 'Soft drinks'),
(15, 160, 'Lav', NULL, '0,3', 'Wines and Beers'),
(16, 200, 'Lav', NULL, '0,5', 'Wines and Beers'),
(17, 160, 'Zaječarsko pivo', NULL, '0,5', 'Wines and Beers'),
(18, 150, 'Jelen', NULL, '0,3', 'Wines and Beers'),
(19, 220, 'Jelen', NULL, '0,5', 'Wines and Beers'),
(20, 250, 'Erdingen', NULL, '0,5', 'Wines and Beers'),
(21, 140, 'Paullaner', NULL, '0,3', 'Wines and Beers'),
(22, 200, 'Paullaner', NULL, '0,5', 'Wines and Beers'),
(23, 270, 'Belo vino', NULL, '0,3', 'Wines and Beers'),
(24, 270, 'Crno vino', NULL, '0,3', 'Wines and Beers');
