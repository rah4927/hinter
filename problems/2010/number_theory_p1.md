---
id: fimo_2010_number_theory_p1_2
year: 2010
number: 1
difficulty: medium
topics: ["number theory"]
source: "IMO 2010 Number Theory Problem 1"
---

Find the least positive integer \(n\) for which there exists a set \(\left\{s_{1}, s_{2}, \ldots, s_{n}\right\}\) consisting of \(n\) distinct positive integers such that
\[
\left(1-\frac{1}{s_{1}}\right)\left(1-\frac{1}{s_{2}}\right) \ldots\left(1-\frac{1}{s_{n}}\right)=\frac{42}{2010} .
\]


---
Suppose that for some \(n\) there exist the desired numbers. In the same way we obtain that \(s_{i} \geq i+1\). Moreover, since the denominator of the fraction \(\frac{42}{2010}=\frac{7}{335}\) is divisible by 67 , some of \(s_{i}\) 's should be divisible by 67 , so \(s_{n} \geq s_{i} \geq 67\). This means that
\[
\frac{42}{2010} \geq \frac{1}{2} \cdot \frac{2}{3} \cdots \frac{n-1}{n} \cdot\left(1-\frac{1}{67}\right)=\frac{66}{67 n},
\]
which implies
\[
n \geq \frac{2010 \cdot 66}{42 \cdot 67}=\frac{330}{7} > 47
\]
so \(n \geq 48\).
Now we are left to show that \(n=48\) fits. Consider the set \(\{2,3, \ldots, 33,36,37, \ldots, 50,67\}\) which contains exactly 48 numbers. We have
\[
\frac{1}{2} \cdot \frac{2}{3} \cdots \frac{32}{33} \cdot \frac{35}{36} \cdots \frac{49}{50} \cdot \frac{66}{67}=\frac{1}{33} \cdot \frac{35}{50} \cdot \frac{66}{67}=\frac{7}{335}=\frac{42}{2010},
\]
hence for \(n=48\) there exists a desired example.
