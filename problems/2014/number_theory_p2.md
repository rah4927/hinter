---
id: fimo_2014_number_theory_p2
year: 2014
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2014 Number Theory Problem 2"
---

Determine all pairs \((x, y)\) of positive integers such that
\[
\sqrt[3]{7 x^{2}-13 x y+7 y^{2}}=|x-y|+1 .
\]
The answer is that either \((x, y)=(1,1)\) or \(\{x, y\}=\left\{m^{3}+m^{2}-2 m-1, m^{3}+2 m^{2}-m-1\right\}\) for some positive integer \(m \geqslant 2\).

---
Let \((x, y)\) be any pair of positive integers solving (1). We shall prove that it appears in the list displayed above. The converse assertion that all these pairs do actually satisfy (1) either may be checked directly by means of a somewhat laborious calculation, or it can be seen by going in reverse order through the displayed equations that follow.
In case \(x=y\) the given equation reduces to \(x^{2 / 3}=1\), which is equivalent to \(x=1\), whereby he have found the first solution.
To find the solutions with \(x \neq y\) we may assume \(x > y\) due to symmetry. Then the integer \(n=x-y\) is positive and (1) may be rewritten as
\[
\sqrt[3]{7(y+n)^{2}-13(y+n) y+7 y^{2}}=n+1
\]
Raising this to the third power and simplifying the result one obtains
\[
y^{2}+y n=n^{3}-4 n^{2}+3 n+1 .
\]
To complete the square on the left hand side, we multiply by 4 and add \(n^{2}\), thus getting
\[
(2 y+n)^{2}=4 n^{3}-15 n^{2}+12 n+4=(n-2)^{2}(4 n+1) .
\]
This shows that the cases \(n=1\) and \(n=2\) are impossible, whence \(n > 2\), and \(4 n+1\) is the square of the rational number \(\frac{2 y+n}{n-2}\). Consequently, it has to be a perfect square, and, since it is odd as well, there has to exist some nonnegative integer \(m\) such that \(4 n+1=(2 m+1)^{2}\), i.e.
\[
n=m^{2}+m .
\]
Notice that \(n > 2\) entails \(m \geqslant 2\). Substituting the value of \(n\) just found into the previous displayed equation we arrive at
\[
\left(2 y+m^{2}+m\right)^{2}=\left(m^{2}+m-2\right)^{2}(2 m+1)^{2}=\left(2 m^{3}+3 m^{2}-3 m-2\right)^{2} .
\]
Extracting square roots and taking \(2 m^{3}+3 m^{2}-3 m-2=(m-1)\left(2 m^{2}+5 m+2\right) > 0\) into account we derive \(2 y+m^{2}+m=2 m^{3}+3 m^{2}-3 m-2\), which in turn yields
\[
y=m^{3}+m^{2}-2 m-1 .
\]
Notice that \(m \geqslant 2\) implies that \(y=\left(m^{3}-1\right)+(m-2) m\) is indeed positive, as it should be. In view of \(x=y+n=y+m^{2}+m\) it also follows that
\[
x=m^{3}+2 m^{2}-m-1,
\]
and that this integer is positive as well.
