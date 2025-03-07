---
id: fimo_2009_number_theory_p4
year: 2009
number: 4
difficulty: medium
topics: ["number theory"]
source: "IMO 2009 Number Theory Problem 4"
---

Find all positive integers \(n\) such that there exists a sequence of positive integers \(a_{1}, a_{2}, \ldots, a_{n}\) satisfying
\[
a_{k+1}=\frac{a_{k}^{2}+1}{a_{k-1}+1}-1
\]
for every \(k\) with \(2 \leq k \leq n-1\).


---
Such a sequence exists for \(n=1,2,3,4\) and no other \(n\). Since the existence of such a sequence for some \(n\) implies the existence of such a sequence for all smaller \(n\), it suffices to prove that \(n=5\) is not possible and \(n=4\) is possible.
Assume first that for \(n=5\) there exists a sequence of positive integers \(a_{1}, a_{2}, \ldots, a_{5}\) satisfying the conditions
\[
\begin{aligned}
& a_{2}^{2}+1=\left(a_{1}+1\right)\left(a_{3}+1\right), \\
& a_{3}^{2}+1=\left(a_{2}+1\right)\left(a_{4}+1\right), \\
& a_{4}^{2}+1=\left(a_{3}+1\right)\left(a_{5}+1\right) .
\end{aligned}
\]
Assume \(a_{1}\) is odd, then \(a_{2}\) has to be odd as well and as then \(a_{2}^{2}+1 \equiv 2 \bmod 4, a_{3}\) has to be even. But this is a contradiction, since then the even number \(a_{2}+1\) cannot divide the odd number \(a_{3}^{2}+1\).
Hence \(a_{1}\) is even.
If \(a_{2}\) is odd, \(a_{3}^{2}+1\) is even (as a multiple of \(\left.a_{2}+1\right)\) and hence \(a_{3}\) is odd, too. Similarly we must have \(a_{4}\) odd as well. But then \(a_{3}^{2}+1\) is a product of two even numbers \(\left(a_{2}+1\right)\left(a_{4}+1\right)\) and thus is divisible by 4 , which is a contradiction as for odd \(a_{3}\) we have \(a_{3}^{2}+1 \equiv 2 \bmod 4\).
Hence \(a_{2}\) is even. Furthermore \(a_{3}+1\) divides the odd number \(a_{2}^{2}+1\) and so \(a_{3}\) is even. Similarly, \(a_{4}\) and \(a_{5}\) are even as well.
Now set \(x=a_{2}\) and \(y=a_{3}\). From the given condition we get \((x+1) \mid\left(y^{2}+1\right)\) and \((y+1) \mid\left(x^{2}+1\right)\). We will prove that there is no pair of positive even numbers \((x, y)\) satisfying these two conditions, thus yielding a contradiction to the assumption.
Assume there exists a pair \(\left(x_{0}, y_{0}\right)\) of positive even numbers satisfying the two conditions \(\left(x_{0}+1\right) \mid\left(y_{0}^{2}+1\right)\) and \(\left(y_{0}+1\right) \mid\left(x_{0}^{2}+1\right)\).
Then one has \(\left(x_{0}+1\right) \mid\left(y_{0}^{2}+1+x_{0}^{2}-1\right)\), i.e., \(\left(x_{0}+1\right) \mid\left(x_{0}^{2}+y_{0}^{2}\right)\), and similarly \(\left(y_{0}+1\right) \mid\left(x_{0}^{2}+y_{0}^{2}\right)\). Any common divisor \(d\) of \(x_{0}+1\) and \(y_{0}+1\) must hence also divide the number \(\left(x_{0}^{2}+1\right)+\left(y_{0}^{2}+1\right)-\left(x_{0}^{2}+y_{0}^{2}\right)=2\). But as \(x_{0}+1\) and \(y_{0}+1\) are both odd, we must have \(d=1\). Thus \(x_{0}+1\) and \(y_{0}+1\) are relatively prime and therefore there exists a positive integer \(k\) such that
\[
k(x+1)(y+1)=x^{2}+y^{2}
\]
has the solution \(\left(x_{0}, y_{0}\right)\). We will show that the latter equation has no solution \((x, y)\) in positive even numbers.
Assume there is a solution. Pick the solution \(\left(x_{1}, y_{1}\right)\) with the smallest sum \(x_{1}+y_{1}\) and assume \(x_{1} \geq y_{1}\). Then \(x_{1}\) is a solution to the quadratic equation
\[
x^{2}-k\left(y_{1}+1\right) x+y_{1}^{2}-k\left(y_{1}+1\right)=0 .
\]
Let \(x_{2}\) be the second solution, which by VIETA's theorem fulfills \(x_{1}+x_{2}=k\left(y_{1}+1\right)\) and \(x_{1} x_{2}=y_{1}^{2}-k\left(y_{1}+1\right)\). If \(x_{2}=0\), the second equation implies \(y_{1}^{2}=k\left(y_{1}+1\right)\), which is impossible, as \(y_{1}+1 > 1\) cannot divide the relatively prime number \(y_{1}^{2}\). Therefore \(x_{2} \neq 0\).
Also we get \(\left(x_{1}+1\right)\left(x_{2}+1\right)=x_{1} x_{2}+x_{1}+x_{2}+1=y_{1}^{2}+1\) which is odd, and hence \(x_{2}\) must be even and positive. Also we have \(x_{2}+1=\frac{y_{1}^{2}+1}{x_{1}+1} \leq \frac{y_{1}^{2}+1}{y_{1}+1} \leq y_{1} \leq x_{1}\). But this means that the pair \(\left(x^{\prime}, y^{\prime}\right)\) with \(x^{\prime}=y_{1}\) and \(y^{\prime}=x_{2}\) is another solution of \(k(x+1)(y+1)=x^{2}+y^{2}\) in even positive numbers with \(x^{\prime}+y^{\prime} < x_{1}+y_{1}\), a contradiction.
Therefore we must have \(n \leq 4\).
When \(n=4\), a possible example of a sequence is \(a_{1}=4, a_{2}=33, a_{3}=217\) and \(a_{4}=1384\).
