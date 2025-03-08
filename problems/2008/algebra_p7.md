---
id: fimo_2008_algebra_p7
year: 2008
number: 7
difficulty: medium
topics: ["algebra"]
source: "IMO 2008 Algebra Problem 7"
---

Prove that for any four positive real numbers \(a, b, c, d\) the inequality

\[
\frac{(a-b)(a-c)}{a+b+c}+\frac{(b-c)(b-d)}{b+c+d}+\frac{(c-d)(c-a)}{c+d+a}+\frac{(d-a)(d-b)}{d+a+b} \geq 0
\]

holds. Determine all cases of equality.

The final answer is \(a=c\) and simultaneously \(b=d\).

---
Denote the four terms by

\[
A=\frac{(a-b)(a-c)}{a+b+c}, \quad B=\frac{(b-c)(b-d)}{b+c+d}, \quad C=\frac{(c-d)(c-a)}{c+d+a}, \quad D=\frac{(d-a)(d-b)}{d+a+b} .
\]

The expression \(2 A\) splits into two summands as follows,

\[
2 A=A^{\prime}+A^{\prime \prime} \quad \text { where } \quad A^{\prime}=\frac{(a-c)^{2}}{a+b+c}, \quad A^{\prime \prime}=\frac{(a-c)(a-2 b+c)}{a+b+c} ;
\]

this is easily verified. We analogously represent \(2 B=B^{\prime}+B^{\prime \prime}, 2 C=C^{\prime}+C^{\prime \prime}, 2 B=D^{\prime}+D^{\prime \prime}\) and examine each of the sums \(A^{\prime}+B^{\prime}+C^{\prime}+D^{\prime}\) and \(A^{\prime \prime}+B^{\prime \prime}+C^{\prime \prime}+D^{\prime \prime}\) separately.

Write \(s=a+b+c+d\); the denominators become \(s-d, s-a, s-b, s-c\). By the CauchySchwarz inequality,

\[
\begin{aligned}
& \left(\frac{|a-c|}{\sqrt{s-d}} \cdot \sqrt{s-d}+\frac{|b-d|}{\sqrt{s-a}} \cdot \sqrt{s-a}+\frac{|c-a|}{\sqrt{s-b}} \cdot \sqrt{s-b}+\frac{|d-b|}{\sqrt{s-c}} \cdot \sqrt{s-c}\right)^{2} \\
& \leq\left(\frac{(a-c)^{2}}{s-d}+\frac{(b-d)^{2}}{s-a}+\frac{(c-a)^{2}}{s-b}+\frac{(d-b)^{2}}{s-c}\right)(4 s-s)=3 s\left(A^{\prime}+B^{\prime}+C^{\prime}+D^{\prime}\right) .
\end{aligned}
\]

Hence

\[
A^{\prime}+B^{\prime}+C^{\prime}+D^{\prime} \geq \frac{(2|a-c|+2|b-d|)^{2}}{3 s} \geq \frac{16 \cdot|a-c| \cdot|b-d|}{3 s} .
\]

Next we estimate the absolute value of the other sum. We couple \(A^{\prime \prime}\) with \(C^{\prime \prime}\) to obtain

\[
\begin{aligned}
A^{\prime \prime}+C^{\prime \prime} & =\frac{(a-c)(a+c-2 b)}{s-d}+\frac{(c-a)(c+a-2 d)}{s-b} \\
& =\frac{(a-c)(a+c-2 b)(s-b)+(c-a)(c+a-2 d)(s-d)}{(s-d)(s-b)} \\
& =\frac{(a-c)(-2 b(s-b)-b(a+c)+2 d(s-d)+d(a+c))}{s(a+c)+b d} \\
& =\frac{3(a-c)(d-b)(a+c)}{M}, \quad \text { with } \quad M=s(a+c)+b d .
\end{aligned}
\]

Hence by cyclic shift

\[
B^{\prime \prime}+D^{\prime \prime}=\frac{3(b-d)(a-c)(b+d)}{N}, \quad \text { with } \quad N=s(b+d)+c a .
\]

Thus

\[
A^{\prime \prime}+B^{\prime \prime}+C^{\prime \prime}+D^{\prime \prime}=3(a-c)(b-d)\left(\frac{b+d}{N}-\frac{a+c}{M}\right)=\frac{3(a-c)(b-d) W}{M N}
\]

where

\[
W=(b+d) M-(a+c) N=b d(b+d)-a c(a+c) .
\]

Note that

\[
M N > (a c(a+c)+b d(b+d)) s \geq|W| \cdot s .
\]

Now (2) and (4) yield

\[
\left|A^{\prime \prime}+B^{\prime \prime}+C^{\prime \prime}+D^{\prime \prime}\right| \leq \frac{3 \cdot|a-c| \cdot|b-d|}{s} .
\]

Combined with (1) this results in

\[
\begin{aligned}
2(A+B & +C+D)=\left(A^{\prime}+B^{\prime}+C^{\prime}+D^{\prime}\right)+\left(A^{\prime \prime}+B^{\prime \prime}+C^{\prime \prime}+D^{\prime \prime}\right) \\
& \geq \frac{16 \cdot|a-c| \cdot|b-d|}{3 s}-\frac{3 \cdot|a-c| \cdot|b-d|}{s}=\frac{7 \cdot|a-c| \cdot|b-d|}{3(a+b+c+d)} \geq 0 .
\end{aligned}
\]

This is the required inequality. From the last line we see that equality can be achieved only if either \(a=c\) or \(b=d\). Since we also need equality in (1), this implies that actually \(a=c\) and \(b=d\) must hold simultaneously, which is obviously also a sufficient condition.
