---
id: fimo_2009_algebra_p3
year: 2009
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2009 Algebra Problem 3"
---

Determine all functions \(f\) from the set of positive integers into the set of positive integers such that for all \(x\) and \(y\) there exists a non degenerated triangle with sides of lengths
\[
x, \quad f(y) \text { and } f(y+f(x)-1) .
\]


---
The identity function \(f(x)=x\) is the only solution of the problem.
If \(f(x)=x\) for all positive integers \(x\), the given three lengths are \(x, y=f(y)\) and \(z=\) \(f(y+f(x)-1)=x+y-1\). Because of \(x \geq 1, y \geq 1\) we have \(z \geq \max \{x, y\} > |x-y|\) and \(z < x+y\). From this it follows that a triangle with these side lengths exists and does not degenerate. We prove in several steps that there is no other solution.
Step 1. We show \(f(1)=1\)
If we had \(f(1)=1+m > 1\) we would conclude \(f(y)=f(y+m)\) for all \(y\) considering the triangle with the side lengths \(1, f(y)\) and \(f(y+m)\). Thus, \(f\) would be \(m\)-periodic and, consequently, bounded. Let \(B\) be a bound, \(f(x) \leq B\). If we choose \(x > 2 B\) we obtain the contradiction \(x > 2 B \geq f(y)+f(y+f(x)-1)\).
Step 2. For all positive integers \(z\), we have \(f(f(z))=z\).
Setting \(x=z\) and \(y=1\) this follows immediately from Step 1.
Step 3. For all integers \(z \geq 1\), we have \(f(z) \leq z\).
Let us show, that the contrary leads to a contradiction. Assume \(w+1=f(z) > z\) for some \(z\). From Step 1 we know that \(w \geq z \geq 2\). Let \(M=\max \{f(1), f(2), \ldots, f(w)\}\) be the largest value of \(f\) for the first \(w\) integers. First we show, that no positive integer \(t\) exists with
\[
f(t) > \frac{z-1}{w} \cdot t+M
\]
otherwise we decompose the smallest value \(t\) as \(t=w r+s\) where \(r\) is an integer and \(1 \leq s \leq w\). Because of the definition of \(M\), we have \(t > w\). Setting \(x=z\) and \(y=t-w\) we get from the triangle inequality
\[
z+f(t-w) > f((t-w)+f(z)-1)=f(t-w+w)=f(t) .
\]
Hence,
\[
f(t-w) \geq f(t)-(z-1) > \frac{z-1}{w}(t-w)+M,
\]
a contradiction to the minimality of \(t\).
Therefore the inequality (1) fails for all \(t \geq 1\), we have proven
\[
f(t) \leq \frac{z-1}{w} \cdot t+M
\]
instead. Now, using (2), we finish the proof of Step 3. Because of \(z \leq w\) we have \(\frac{z-1}{w} < 1\) and we can choose an integer \(t\) sufficiently large to fulfill the condition
\[
\left(\frac{z-1}{w}\right)^{2} t+\left(\frac{z-1}{w}+1\right) M < t
\]
Applying (2) twice we get
\[
f(f(t)) \leq \frac{z-1}{w} f(t)+M \leq \frac{z-1}{w}\left(\frac{z-1}{w} t+M\right)+M < t
\]
in contradiction to Step 2, which proves Step 3.
Final step. Thus, following Step 2 and Step 3, we obtain
\[
z=f(f(z)) \leq f(z) \leq z
\]
and \(f(z)=z\) for all positive integers \(z\) is proven.
