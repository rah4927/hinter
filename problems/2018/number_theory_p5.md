---
id: fimo_2018_number_theory_p5
year: 2018
number: 5
difficulty: medium
topics: ["number theory"]
source: "IMO 2018 Number Theory Problem 5"
---

Four positive integers \(x, y, z\), and \(t\) satisfy the relations
\[
x y-z t=x+y=z+t
\]
Is it possible that both \(x y\) and \(z t\) are perfect squares?


---
Arguing indirectly, assume that \(x y=a^{2}\) and \(z t=c^{2}\) with \(a, c > 0\).
Suppose that the number \(x+y=z+t\) is odd. Then \(x\) and \(y\) have opposite parity, as well as \(z\) and \(t\). This means that both \(x y\) and \(z t\) are even, as well as \(x y-z t=x+y\); a contradiction. Thus, \(x+y\) is even, so the number \(s=\frac{x+y}{2}=\frac{z+t}{2}\) is a positive integer.
Next, we set \(b=\frac{|x-y|}{2}, d=\frac{|z-t|}{2}\). Now the problem conditions yield
\[
s^{2}=a^{2}+b^{2}=c^{2}+d^{2}
\]
and
\[
2 s=a^{2}-c^{2}=d^{2}-b^{2}
\]
(the last equality in (2) follows from (1)). We readily get from (2) that \(a, d > 0\).
In the sequel we will use only the relations (1) and (2), along with the fact that \(a, d, s\) are positive integers, while \(b\) and \(c\) are nonnegative integers, at most one of which may be zero. Since both relations are symmetric with respect to the simultaneous swappings \(a \leftrightarrow d\) and \(b \leftrightarrow c\), we assume, without loss of generality, that \(b \geqslant c\) (and hence \(b > 0\) ). Therefore, \(d^{2}=2 s+b^{2} > c^{2}\), whence
\[
d^{2} > \frac{c^{2}+d^{2}}{2}=\frac{s^{2}}{2}
\]
On the other hand, since \(d^{2}-b^{2}\) is even by (2), the numbers \(b\) and \(d\) have the same parity, so \(0 < b \leqslant d-2\). Therefore,
\[
2 s=d^{2}-b^{2} \geqslant d^{2}-(d-2)^{2}=4(d-1), \quad \text { i.e., } \quad d \leqslant \frac{s}{2}+1
\]
Combining (3) and (4) we obtain
\[
2 s^{2} < 4 d^{2} \leqslant 4\left(\frac{s}{2}+1\right)^{2}, \quad \text { or } \quad(s-2)^{2} < 8
\]
which yields \(s \leqslant 4\).
Finally, an easy check shows that each number of the form \(s^{2}\) with \(1 \leqslant s \leqslant 4\) has a unique representation as a sum of two squares, namely \(s^{2}=s^{2}+0^{2}\). Thus, (1) along with \(a, d > 0\) imply \(b=c=0\), which is impossible.
