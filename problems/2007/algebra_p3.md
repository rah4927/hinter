---
id: fimo_2007_algebra_p3
year: 2007
number: 3
difficulty: medium
topics: ["algebra"]
source: "IMO 2007 Algebra Problem 3"
---

Let \(n\) be a positive integer, and let \(x\) and \(y\) be positive real numbers such that \(x^{n}+y^{n}=1\). Prove that

\[
\left(\sum_{k=1}^{n} \frac{1+x^{2 k}}{1+x^{4 k}}\right)\left(\sum_{k=1}^{n} \frac{1+y^{2 k}}{1+y^{4 k}}\right) < \frac{1}{(1-x)(1-y)} .
\]

---
For each real \(t \in(0,1)\),

\[
\frac{1+t^{2}}{1+t^{4}}=\frac{1}{t}-\frac{(1-t)\left(1-t^{3}\right)}{t\left(1+t^{4}\right)} < \frac{1}{t} .
\]

Substituting \(t=x^{k}\) and \(t=y^{k}\)

\[
0 < \sum_{k=1}^{n} \frac{1+x^{2 k}}{1+x^{4 k}} < \sum_{k=1}^{n} \frac{1}{x^{k}}=\frac{1-x^{n}}{x^{n}(1-x)} \quad \text { and } \quad 0 < \sum_{k=1}^{n} \frac{1+y^{2 k}}{1+y^{4 k}} < \sum_{k=1}^{n} \frac{1}{y^{k}}=\frac{1-y^{n}}{y^{n}(1-y)} .
\]

Since \(1-y^{n}=x^{n}\) and \(1-x^{n}=y^{n}\)

\[
\frac{1-x^{n}}{x^{n}(1-x)}=\frac{y^{n}}{x^{n}(1-x)}, \quad \frac{1-y^{n}}{y^{n}(1-y)}=\frac{x^{n}}{y^{n}(1-y)}
\]

and therefore

\[
\left(\sum_{k=1}^{n} \frac{1+x^{2 k}}{1+x^{4 k}}\right)\left(\sum_{k=1}^{n} \frac{1+y^{2 k}}{1+y^{4 k}}\right) < \frac{y^{n}}{x^{n}(1-x)} \cdot \frac{x^{n}}{y^{n}(1-y)}=\frac{1}{(1-x)(1-y)} .
\]
