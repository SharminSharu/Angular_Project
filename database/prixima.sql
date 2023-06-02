-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2023 at 04:58 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prixima`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `photo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `logo`, `title`, `description`, `photo`) VALUES
(1, 'assets/img/icon6.png', 'E-mail Marketing', 'It is a long established fact that a reader will be distracted by the readable content of a page.', ''),
(2, 'assets/img/icon4.png', 'Web Developing', 'It is a long established fact that a reader will be distracted by the readable content of a page.', ''),
(3, 'assets/img/icon5.png', 'Buisness Marketing', 'It is a long established fact that a reader will be distracted by the readable content of a page', 'assets/img/about.png');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `photo` text NOT NULL,
  `batch` varchar(255) NOT NULL,
  `date` year(4) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `photo`, `batch`, `date`, `title`, `description`) VALUES
(1, 'assets/img/project1.jpg', 'Web Design', 2023, 'Web Design trends in 2023', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.'),
(2, 'assets/img/project2.jpg', 'Programming', 2023, 'Web Programming trends in 2023', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.'),
(3, 'assets/img/project4.jpg', 'Marketing ', 2023, 'Web Marketing trends in 2023', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `first` varchar(255) NOT NULL,
  `last` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `first`, `last`, `email`, `msg`) VALUES
(1, 'Sharmin', 'Akter', 'sha@gmail.com', 'Hello'),
(2, 'Amrin', 'Amrin', 'am@gmail.com', 'Hello..g'),
(3, 'masuka', 'Nowrin', 'noe@gmail.com', 'Hello. DC.'),
(4, 'Sumona', 'Ali', 'sa@gmail.com', 'Hello..Sumu'),
(5, 'Sharmin', 'Sharmin', 'Sha@gmail', 'sdgfsdfg'),
(6, 'dsF', 'zsdg', 'zdg', 'zg');

-- --------------------------------------------------------

--
-- Table structure for table `general_info`
--

CREATE TABLE `general_info` (
  `id` int(11) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `web` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `map` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `general_info`
--

INSERT INTO `general_info` (`id`, `phone`, `email`, `address`, `web`, `time`, `map`) VALUES
(1, '+8801541457892', ' prixima@info.com', '25/A Ghulsan', 'prixima@info.com', 'Sunday-Friday (9am-5pm)', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254007805344!2d90.40761688766375!3d23.798553152588674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1674922047839!5m2!1sen!2sbd');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `t` varchar(255) NOT NULL,
  `p_title` varchar(255) NOT NULL,
  `p_description` text NOT NULL,
  `p_logo` varchar(255) NOT NULL,
  `p_title_1` varchar(255) NOT NULL,
  `p_designation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `t`, `p_title`, `p_description`, `p_logo`, `p_title_1`, `p_designation`) VALUES
(1, 'Work', 'Successful projects', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', 'assets/img/project1.jpg', 'Consulting Marketing', 'Website Design'),
(2, '', '', '', 'assets/img/project3.jpg', 'Consulting Marketing', 'Website Design'),
(3, '', '', '', 'assets/img/project2.jpg', 'Consulting Marketing', 'Website Design'),
(4, '', '', '', 'assets/img/project4.jpg', 'Consulting Marketing', 'Website Design'),
(5, '', '', '', 'assets/img/project5.jpg', 'Consulting Marketing', 'Website Design'),
(6, '', '', '', 'assets/img/project1.jpg', 'Consulting Marketing', 'Website Design');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `bg` text NOT NULL,
  `photo` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `bg`, `photo`, `name`, `designation`, `comment`) VALUES
(1, 'assets/img/bg-banner4.jpg', 'assets/img/team_1.jpg', 'Adip Rayhan', 'Market Development Manager', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.'),
(2, 'assets/img/bg-banner4.jpg', 'assets/img/team_2.jpg', 'Minhaj Khan', 'Web Designer', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.'),
(3, 'assets/img/bg-banner4.jpg', 'assets/img/team_1.jpg', 'Babor Ali', 'Software developer', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.'),
(4, 'assets/img/bg-banner4.jpg', 'assets/img/team_6.jpg', 'Tanjid Chowdury', 'Web marketing', 'The post can be written by someone who works for your company, or you can hire a guest writer to compose the post. The benefit of hiring an external writer is the post can be shared either on your blog or on another blog that\'s popular in your industry.');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `ser_logo` text NOT NULL,
  `ser_title_1` varchar(255) NOT NULL,
  `ser_description_1` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `ser_logo`, `ser_title_1`, `ser_description_1`) VALUES
(1, 'assets/img/icon1.png', 'Digital Marketing', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'),
(2, 'assets/img/icon2.png', 'Logo Designing', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'),
(3, 'assets/img/icon3.png', 'Buisness consulting', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'),
(4, 'assets/img/icon4.png', 'Videography', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'),
(5, 'assets/img/icon5.png', 'Brand Identity', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from'),
(6, 'assets/img/icon6.png', 'Ethical Hacking', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `bg` text NOT NULL,
  `title_1` varchar(255) NOT NULL,
  `title_2` varchar(255) NOT NULL,
  `title_3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `bg`, `title_1`, `title_2`, `title_3`) VALUES
(1, 'assets/img/bg_banner5.jpg', 'design Driven for professional', 'We craft digital', 'business!'),
(2, 'assets/img/bg_banner1.jpg', 'We craft digital experiances', 'Design Driven For', 'Professionals'),
(3, 'assets/img/bg-banner4.jpg', 'We craft digital experiances', 'We craft digital', 'experiances');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(11) NOT NULL,
  `t` varchar(255) NOT NULL,
  `t_title` varchar(255) NOT NULL,
  `t_description` text NOT NULL,
  `t_photo` text NOT NULL,
  `t_name` varchar(255) NOT NULL,
  `t_designation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `t`, `t_title`, `t_description`, `t_photo`, `t_name`, `t_designation`) VALUES
(1, 'TEAM', 'Team Members', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old', 'assets/img/team_4.jpg', 'Mahin Alam', 'Ethical Hacker'),
(2, '', '', '', 'assets/img/team_5.jpg', 'Masuka Nowrin', 'Software Developer'),
(3, '', '', '', 'assets/img/team_6.jpg', 'Atif Khan', 'Marketing Coordinator');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general_info`
--
ALTER TABLE `general_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `general_info`
--
ALTER TABLE `general_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
