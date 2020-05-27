INSERT INTO users (name, email, password) 
  VALUES ('Theolonius Harper', 'tharps@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Gert Yasarobi', 'ggyaya@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Fernando Parks', 'fernandoParks300@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Guy Winslow', 'winny202@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Elise Norman', 'elisenormanbusiness@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Samantha Cooper', 'sam1988@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Jerry Timeweild', 'jerrbear@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
  ('Nicola Westgard', 'westysoccer@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');


INSERT INTO properties (owner_id, title, description, thumbnail_photo_url,cover_photo_url, cost_per_night, 
 parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) 
  VALUES (3, 'Very FUN', 'description', 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/190654/pexels-photo-190654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 80, 4, 2, 3, 'Canada', '234 lolol Avenue', 'Squamish', 'British Columbia', '12345', true),
  (6, 'The Homes Home', 'description', 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/190654/pexels-photo-190654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 120, 2, 4, 4, 'Canada', '244 Beak Cresent', 'Edmonton','Alberta', '12345', true),
  (6, 'Big yard', 'description', 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/190654/pexels-photo-190654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 70, 1, 1, 2, 'Canada', '899 Yuno Road', 'Calgary', 'Alberta', '12345', true),
  (7, 'We got a court', 'description', 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/190654/pexels-photo-190654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 220, 5, 6, 6, 'Canada', '1234 Calin Drive', 'Winnepeg', 'Manitoba', '12345', true),
  (2, 'Beautiful', 'description', 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/190654/pexels-photo-190654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 100, 3, 3, 4, 'Canada', '665 Remy Avenue', 'Langley', 'British Columbia', '12345', true),
  (7, 'Spring Healing', 'description', 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/190654/pexels-photo-190654.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 80, 4, 2, 3, 'Canada', '627 Remy Avenue', 'Langley', 'British Columbia', '12345', true);

INSERT INTO reservations (start_date, end_date, property_id, guest_id) 
  VALUES ('2020-11-10', '2020-11-15', 3, 1),
  ('2020-09-22', '2020-09-27', 4, 2),
  ('2020-10-10', '2020-10-01', 6, 8),
  ('2021-01-10', '2021-01-17', 5, 4);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message) 
  VALUES (1, 3, 1, 4, 'messages'),
  (2, 4, 2, 4, 'messages'),
  (8, 6, 3, 2, 'messages'),
  (4, 5, 4, 3, 'messages');