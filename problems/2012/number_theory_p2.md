---
id: fimo_2012_number_theory_p2
year: 2012
number: 2
difficulty: medium
topics: ["number theory"]
source: "IMO 2012 Number Theory Problem 2"
---

Find all triples \((x, y, z)\) of positive integers such that \(x \leq y \leq z\) and
\[
x^{3}\left(y^{3}+z^{3}\right)=2012(x y z+2) .
\]


---
First note that \(x\) divides \(2012 \cdot 2=2^{3} \cdot 503\). If \(503 \mid x\) then the right-hand side of the equation is divisible by \(503^{3}\), and it follows that \(503^{2} \mid x y z+2\). This is false as \(503 \mid x\). Hence \(x=2^{m}\) with \(m \in\{0,1,2,3\}\). If \(m \geq 2\) then \(2^{6} \mid 2012(x y z+2)\). However the highest powers of 2 dividing 2012 and \(x y z+2=2^{m} y z+2\) are \(2^{2}\) and \(2^{1}\) respectively. So \(x=1\) or \(x=2\), yielding the two equations
\[
y^{3}+z^{3}=2012(y z+2), \quad \text { and } \quad y^{3}+z^{3}=503(y z+1) .
\]
In both cases the prime \(503=3 \cdot 167+2\) divides \(y^{3}+z^{3}\). We claim that \(503 \mid y+z\). This is clear if \(503 \mid y\), so let \(503 \nmid y\) and \(503 \nmid z\). Then \(y^{502} \equiv z^{502}(\bmod 503)\) by FERMAT's little theorem. On the other hand \(y^{3} \equiv-z^{3}(\bmod 503)\) implies \(y^{3 \cdot 167} \equiv-z^{3 \cdot 167}(\bmod 503)\), i. e. \(y^{501} \equiv-z^{501}(\bmod 503)\). It follows that \(y \equiv-z(\bmod 503)\) as claimed.
Therefore \(y+z=503 k\) with \(k \geq 1\). In view of \(y^{3}+z^{3}=(y+z)\left((y-z)^{2}+y z\right)\) the two equations take the form
\[
\begin{aligned}
& k(y-z)^{2}+(k-4) y z=8 \\
& k(y-z)^{2}+(k-1) y z=1
\end{aligned}
\]
In (1) we have \((k-4) y z \leq 8\), which implies \(k \leq 4\). Indeed if \(k > 4\) then \(1 \leq(k-4) y z \leq 8\), so that \(y \leq 8\) and \(z \leq 8\). This is impossible as \(y+z=503 k \geq 503\). Note next that \(y^{3}+z^{3}\) is even in the first equation. Hence \(y+z=503 k\) is even too, meaning that \(k\) is even. Thus \(k=2\) or \(k=4\). Clearly (1) has no integer solutions for \(k=4\). If \(k=2\) then (1) takes the form \((y+z)^{2}-5 y z=4\). Since \(y+z=503 k=503 \cdot 2\), this leads to \(5 y z=503^{2} \cdot 2^{2}-4\). However \(503^{2} \cdot 2^{2}-4\) is not a multiple of 5 . Therefore (1) has no integer solutions.
Equation (2) implies \(0 \leq(k-1) y z \leq 1\), so that \(k=1\) or \(k=2\). Also \(0 \leq k(y-z)^{2} \leq 1\), hence \(k=2\) only if \(y=z\). However then \(y=z=1\), which is false in view of \(y+z \geq 503\). Therefore \(k=1\) and (2) takes the form \((y-z)^{2}=1\), yielding \(z-y=|y-z|=1\). Combined with \(k=1\) and \(y+z=503 k\), this leads to \(y=251, z=252\).
In summary the triple \((2,251,252)\) is the only solution.
