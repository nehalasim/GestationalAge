# GestationalAge
This is used in a projct funded by NOVAVAX. This is  a web based application to identify the Gestational age  and EDD of the pregnent woman. 
At first it is used to save the calculated data, but after discussion the saving data process has been removed from the program. But there is another file name index1.php, which was used to save data. To store data I used SQLite. Right now its not functional.

........................USES of THE SYSTEM............................
1. At first it will ask you to enter the case ID.
2. Then You need to provide the Ultra sound date and Gestational age from the ultra sound report of the pregnent woman.
3. After above data, you need to click on the GET GA button to get the current Gestational age of the woman.
4. If the EDD is available on the ultra cound report then you need to click on the EDD Available-YES. If the the EDD is not available then you need to click on NO, whcih will calculate the EDD of the woman.
5. If the LMP is known to the pregnent woman, then enter the LMP date.
6. After entering the EDD click on the get edd to get the EDD of the woman.

After all the process above click on the get eligible trial button to determine the woman is eligible or not for the specific study.
There is a some complex Gestational algorithm used to determine the eligibility of the woman.

.......................How To Run The System......................
Its simple. Just use any web server to run the system. Any one can run this system from local server by coping and pasting the files into any specific web server folder.
