---
id: fimo_2008_algebra_p6
year: 2008
number: 6
difficulty: medium
topics: ["algebra"]
source: "IMO 2008 Algebra Problem 6"
---

Let \(f: \mathbb{R} \rightarrow \mathbb{N}\) be a function which satisfies

\[
f\left(x+\frac{1}{f(y)}\right)=f\left(y+\frac{1}{f(x)}\right) \quad \text { for all } x, y \in \mathbb{R}
\]

Prove that there is a positive integer which is not a value of \(f\).

---
Suppose that the statement is false and \(f(\mathbb{R})=\mathbb{N}\). We prove several properties of the function \(f\) in order to reach a contradiction.

To start with, observe that one can assume \(f(0)=1\). Indeed, let \(a \in \mathbb{R}\) be such that \(f(a)=1\), and consider the function \(g(x)=f(x+a)\). By substituting \(x+a\) and \(y+a\) for \(x\) and \(y\) in (1), we have

\[
g\left(x+\frac{1}{g(y)}\right)=f\left(x+a+\frac{1}{f(y+a)}\right)=f\left(y+a+\frac{1}{f(x+a)}\right)=g\left(y+\frac{1}{g(x)}\right) .
\]

So \(g\) satisfies the functional equation (1), with the additional property \(g(0)=1\). Also, \(g\) and \(f\) have the same set of values: \(g(\mathbb{R})=f(\mathbb{R})=\mathbb{N}\). Henceforth we assume \(f(0)=1\).

Claim 1. For an arbitrary fixed \(c \in \mathbb{R}\) we have \(\left\{f\left(c+\frac{1}{n}\right): n \in \mathbb{N}\right\}=\mathbb{N}\).

Proof. Equation \((1)\) and \(f(\mathbb{R})=\mathbb{N}\) imply

\(f(\mathbb{R})=\left\{f\left(x+\frac{1}{f(c)}\right): x \in \mathbb{R}\right\}=\left\{f\left(c+\frac{1}{f(x)}\right): x \in \mathbb{R}\right\} \subset\left\{f\left(c+\frac{1}{n}\right): n \in \mathbb{N}\right\} \subset f(\mathbb{R})\).

The claim follows.

We will use Claim 1 in the special cases \(c=0\) and \(c=1 / 3\) :

\[
\left\{f\left(\frac{1}{n}\right): n \in \mathbb{N}\right\}=\left\{f\left(\frac{1}{3}+\frac{1}{n}\right): n \in \mathbb{N}\right\}=\mathbb{N} .
\]

Claim 2. If \(f(u)=f(v)\) for some \(u, v \in \mathbb{R}\) then \(f(u+q)=f(v+q)\) for all nonnegative rational \(q\). Furthermore, if \(f(q)=1\) for some nonnegative rational \(q\) then \(f(k q)=1\) for all \(k \in \mathbb{N}\).

Proof. For all \(x \in \mathbb{R}\) we have by \((1)\)

\[
f\left(u+\frac{1}{f(x)}\right)=f\left(x+\frac{1}{f(u)}\right)=f\left(x+\frac{1}{f(v)}\right)=f\left(v+\frac{1}{f(x)}\right)
\]

Since \(f(x)\) attains all positive integer values, this yields \(f(u+1 / n)=f(v+1 / n)\) for all \(n \in \mathbb{N}\). Let \(q=k / n\) be a positive rational number. Then \(k\) repetitions of the last step yield

\[
f(u+q)=f\left(u+\frac{k}{n}\right)=f\left(v+\frac{k}{n}\right)=f(v+q) .
\]

Now let \(f(q)=1\) for some nonnegative rational \(q\), and let \(k \in \mathbb{N}\). As \(f(0)=1\), the previous conclusion yields successively \(f(q)=f(2 q), f(2 q)=f(3 q), \ldots, f((k-1) q)=f(k q)\), as needed. Claim 3. The equality \(f(q)=f(q+1)\) holds for all nonnegative rational \(q\).

Proof. Let \(m\) be a positive integer such that \(f(1 / m)=1\). Such an \(m\) exists by (2). Applying the second statement of Claim 2 with \(q=1 / m\) and \(k=m\) yields \(f(1)=1\).

Given that \(f(0)=f(1)=1\), the first statement of Claim 2 implies \(f(q)=f(q+1)\) for all nonnegative rational \(q\). Claim 4. The equality \(f\left(\frac{1}{n}\right)=n\) holds for every \(n \in \mathbb{N}\).

Proof. For a nonnegative rational \(q\) we set \(x=q, y=0\) in (1) and use Claim 3 to obtain

\[
f\left(\frac{1}{f(q)}\right)=f\left(q+\frac{1}{f(0)}\right)=f(q+1)=f(q)
\]

By (2), for each \(n \in \mathbb{N}\) there exists a \(k \in \mathbb{N}\) such that \(f(1 / k)=n\). Applying the last equation with \(q=1 / k\), we have

\[
n=f\left(\frac{1}{k}\right)=f\left(\frac{1}{f(1 / k)}\right)=f\left(\frac{1}{n}\right) .
\]

Now we are ready to obtain a contradiction. Let \(n \in \mathbb{N}\) be such that \(f(1 / 3+1 / n)=1\). Such an \(n\) exists by (2). Let \(1 / 3+1 / n=s / t\), where \(s, t \in \mathbb{N}\) are coprime. Observe that \(t > 1\) as \(1 / 3+1 / n\) is not an integer. Choose \(k, l \in \mathbb{N}\) so that that \(k s-l t=1\).

Because \(f(0)=f(s / t)=1\), Claim 2 implies \(f(k s / t)=1\). Now \(f(k s / t)=f(1 / t+l)\); on the other hand \(f(1 / t+l)=f(1 / t)\) by \(l\) successive applications of Claim 3. Finally, \(f(1 / t)=t\) by Claim 4, leading to the impossible \(t=1\). The solution is complete.
