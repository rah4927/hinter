---
id: fimo_2010_algebra_p2
year: 2010
number: 2
difficulty: medium
topics: ["algebra"]
source: "IMO 2010 Algebra Problem 2"
---

Let the real numbers \(a, b, c, d\) satisfy the relations \(a+b+c+d=6\) and \(a^{2}+b^{2}+c^{2}+d^{2}=12\). Prove that
\[
36 \leq 4\left(a^{3}+b^{3}+c^{3}+d^{3}\right)-\left(a^{4}+b^{4}+c^{4}+d^{4}\right) \leq 48 .
\]

---
Observe that
\[
\begin{gathered}
4\left(a^{3}+b^{3}+c^{3}+d^{3}\right)-\left(a^{4}+b^{4}+c^{4}+d^{4}\right)=-\left((a-1)^{4}+(b-1)^{4}+(c-1)^{4}+(d-1)^{4}\right) \\
+6\left(a^{2}+b^{2}+c^{2}+d^{2}\right)-4(a+b+c+d)+4 \\
=-\left((a-1)^{4}+(b-1)^{4}+(c-1)^{4}+(d-1)^{4}\right)+52 .
\end{gathered}
\]
Now, introducing \(x=a-1, y=b-1, z=c-1, t=d-1\), we need to prove the inequalities
\[
16 \geq x^{4}+y^{4}+z^{4}+t^{4} \geq 4,
\]
under the constraint
\[
x^{2}+y^{2}+z^{2}+t^{2}=\left(a^{2}+b^{2}+c^{2}+d^{2}\right)-2(a+b+c+d)+4=4
\]
(we will not use the value of \(x+y+z+t\) though it can be found).
Now the rightmost inequality in (1) follows from the power mean inequality:
\[
x^{4}+y^{4}+z^{4}+t^{4} \geq \frac{\left(x^{2}+y^{2}+z^{2}+t^{2}\right)^{2}}{4}=4 .
\]
For the other one, expanding the brackets we note that
\[
\left(x^{2}+y^{2}+z^{2}+t^{2}\right)^{2}=\left(x^{4}+y^{4}+z^{4}+t^{4}\right)+q,
\]
where \(q\) is a nonnegative number, so
\[
x^{4}+y^{4}+z^{4}+t^{4} \leq\left(x^{2}+y^{2}+z^{2}+t^{2}\right)^{2}=16,
\]
and we are done.
