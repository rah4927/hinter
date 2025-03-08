---
id: fimo_2019_number_theory_p2
year: 2019
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2019 Number Theory Problem 2"
---

Find all triples \((a, b, c)\) of positive integers such that \(a^{3}+b^{3}+c^{3}=(a b c)^{2}\).

The final answers are \((1,2,3)\) and its permutations.

---
Note that the equation is symmetric. In all solutions, we will assume without loss of generality that \(a \geqslant b \geqslant c\), and prove that the only solution is \((a, b, c)=(3,2,1)\).

The first two solutions all start by proving that \(c=1\).

We will start by proving that \(c=1\). Note that

\[
3 a^{3} \geqslant a^{3}+b^{3}+c^{3} > a^{3}
\]

So \(3 a^{3} \geqslant(a b c)^{2} > a^{3}\) and hence \(3 a \geqslant b^{2} c^{2} > a\). Now \(b^{3}+c^{3}=a^{2}\left(b^{2} c^{2}-a\right) \geqslant a^{2}\), and so

\[
18 b^{3} \geqslant 9\left(b^{3}+c^{3}\right) \geqslant 9 a^{2} \geqslant b^{4} c^{4} \geqslant b^{3} c^{5}
\]

so \(18 \geqslant c^{5}\) which yields \(c=1\).

Now, note that we must have \(a > b\), as otherwise we would have \(2 b^{3}+1=b^{4}\) which has no positive integer solutions. So

\[
a^{3}-b^{3} \geqslant(b+1)^{3}-b^{3} > 1
\]

and

\[
2 a^{3} > 1+a^{3}+b^{3} > a^{3}
\]

which implies \(2 a^{3} > a^{2} b^{2} > a^{3}\) and so \(2 a > b^{2} > a\). Therefore

\[
4\left(1+b^{3}\right)=4 a^{2}\left(b^{2}-a\right) \geqslant 4 a^{2} > b^{4}
\]

so \(4 > b^{3}(b-4)\); that is, \(b \leqslant 4\).

Now, for each possible value of \(b\) with \(2 \leqslant b \leqslant 4\) we obtain a cubic equation for \(a\) with constant coefficients. These are as follows:

\[
\begin{array}{ll}
b=2: & a^{3}-4 a^{2}+9=0 \\
b=3: & a^{3}-9 a^{2}+28=0 \\
b=4: & a^{3}-16 a^{2}+65=0 .
\end{array}
\]

The only case with an integer solution for \(a\) with \(b \leqslant a\) is \(b=2\), leading to \((a, b, c)=(3,2,1)\).
